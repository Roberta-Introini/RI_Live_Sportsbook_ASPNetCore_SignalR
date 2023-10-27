namespace RI_Live_Sportsbook_ASPNetCore_SignalR.Models
{
    internal class ScoreGoal
    {
        public string EventMatch { get; set; }
        public string TeamHome { get; set; }
        public DateTimeOffset SentAt { get; set; }
    }
}