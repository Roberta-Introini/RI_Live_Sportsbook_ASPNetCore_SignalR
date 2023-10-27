using RI_Live_Sportsbook_ASPNetCore_SignalR.Models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using static System.Formats.Asn1.AsnWriter;
using System.Collections;
using System.Net.NetworkInformation;
using RI_Live_Sportsbook_ASPNetCore_SignalR.Services;

namespace RI_Live_Sportsbook_ASPNetCore_SignalR
{
    public class LiveSportBoardHub : Hub
    {

        private readonly IMatchBoardService _matchBoardService;

        public LiveSportBoardHub(
          IMatchBoardService matchBoardService)
        {
            _matchBoardService = matchBoardService;

        }
 

        //1. Start a game.When a game starts, it should capture(being initial score 0 – 0): 
        //a.Home team
        //b.Away team 
        public async Task StartMatch(string hometeam, string awayteam)
        {
            string timeSt = DateTime.Now.Hour.ToString() + ':' + DateTime.Now.Minute.ToString();

            Guid obj = Guid.NewGuid();         

            var teamscores = new List<TeamScore>
            {
                new TeamScore { Team = hometeam, Score = 0 },
                new TeamScore { Team = awayteam, Score = 0 }
            };
            var matchStarted = new GameEvent
            {
                MatchEventGUID = obj,
                TeamScores = teamscores,
                StartedAt = DateTime.UtcNow,  //.NET 7.0 Nanoseconds
                StarFinishedAt = DateTimeOffset.MinValue
            };
            await _matchBoardService.AddMatch(matchStarted);

            await Clients.All.SendAsync("MatchStarted", matchStarted);

        }




        public async Task FinishGame(string hometeam, string awayteam)
        {
            await Clients.All.SendAsync("FinishGame", hometeam, awayteam);
        }

        //3. Update score. Receiving the pair score; home team score and away team score updates a
        //game score.
        public async Task ScoreUpdate( string pairscore, string hometeamscore, string awayteamscore)
        {
            //await _matchBoardService.UpdateMatch(gameevent);

            //await Clients.All.SendAsync(
            //    "ScoreUpdated",
            //    gameevent.EventMatch,
            //    gameevent.SentAt,
            //    gameevent.TeamHome);

        }
        //4. Get a summary of games by total score.Those games with the same total score will be
        //returned ordered by the most recently added to our system. 
        public async Task MatchSummary()
        {
            var history = await _matchBoardService
               .GetMessageHistory();

            await Clients.Caller.SendAsync(
                "ShowHistory", history);
        }
    }
}
