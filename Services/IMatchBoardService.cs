using RI_Live_Sportsbook_ASPNetCore_SignalR.Models;

namespace RI_Live_Sportsbook_ASPNetCore_SignalR.Services
{
    public interface IMatchBoardService
    {        
        Task AddMatch(GameEvent gameevent);

        Task<IEnumerable<GameEvent>> GetMessageHistory();
         
    }
}
