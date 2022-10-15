using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace WebApplication1.Models
{
    public class Driver
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public int PhoneNumber { get; set; }
        public Transport Transport { get; set; }

    }
}
