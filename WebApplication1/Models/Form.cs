using System.Data.SqlTypes;
using System.Text.Json;
using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class Form
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public string LocationJson { get; set; }
        public string Comment { get; set; }

        public int IsActive { get; set; }
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

        public string BeginDate { get; set; }
        public string EndDate { get; set; }
        public int Priority { get; set; }
        public int DriverId { get; set; }
        public Driver? Driver { get; set; }
    }
}
