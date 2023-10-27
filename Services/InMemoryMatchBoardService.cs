using RI_Live_Sportsbook_ASPNetCore_SignalR.Models;

namespace RI_Live_Sportsbook_ASPNetCore_SignalR.Services
{
    public class InMemoryMatchBoardService
    {

        private readonly List<GameEvent>
            _gameeventHistory = new List<GameEvent>();

        public Task AddMatch(GameEvent gameevent)
        {
            
             
            _gameeventHistory.Add(gameevent);
            
            return Task.CompletedTask;
        }


        public Task<IEnumerable<GameEvent>> GetMessageHistory()
        {
            var sortedMessages = _gameeventHistory
                .OrderBy(x => x.StarFinishedAt)
                .AsEnumerable();

            return Task.FromResult(sortedMessages);
        }
    }
}
