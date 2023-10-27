namespace RI_Live_Sportsbook_ASPNetCore_SignalR.Models
{
    public class GameEvent
    {
        public Guid MatchEventGUID { get; set; }
        public List<TeamScore> TeamScores { get; set; } // List of TeamScore objects                                                      //public string TeamAway { get; set; }
        public DateTimeOffset StartedAt { get; set; }
        public DateTimeOffset StarFinishedAt { get; set; }



    }
    public class TeamScore
    {
        public string Team { get; set; }
        public int Score { get; set; }
    }

}
