using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class Form
    {
        public int Id { get; set; }
        public int CustomeId { get; set; }
        public Customer Customer { get; set; }
        public Location Location { get; set; }
        public string TransportType { get; set; }
        
        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
