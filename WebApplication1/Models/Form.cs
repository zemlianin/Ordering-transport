using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class Form
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public Location Location { get; set; }
        public TransportTypes TransportType { get; set; }
        
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
