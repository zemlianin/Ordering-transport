using System.Text.Json;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace WebApplication1.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public string PhoneNumber { get; set; }
        public Transport Transport { get; set; }

        public string CurrentLocationJson { get; set; }
        public Location CurrentLocation
        {
            get
            {
                return JsonSerializer.Deserialize<Location>(CurrentLocationJson);
            }
            set
            {
                CurrentLocationJson = JsonSerializer.Serialize<Location>(value);
            }
        }
    }
}
