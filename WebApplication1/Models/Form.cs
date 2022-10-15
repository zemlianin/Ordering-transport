using System.Text.Json;
using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class Form
    {
        public int Id { get; set; }
        public int CustomeId { get; set; }
        public Customer Customer { get; set; }
        public string LocationJson { get; set; }
        public Location Location
        {
            get
            {
                return JsonSerializer.Deserialize<Location>(LocationJson);
            }
            set
            {
                LocationJson = JsonSerializer.Serialize<Location>(value);
            }
        }
        public string TransportType { get; set; }

        public DateTime BeginDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
