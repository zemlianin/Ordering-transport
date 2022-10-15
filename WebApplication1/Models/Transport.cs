namespace WebApplication1.Models
{
    public class Transport
    {
        public int Id { get; set; }

        public int DriverId { get; set; }
        public Driver Driver { get; set; }
    }
}
