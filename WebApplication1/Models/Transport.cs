using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class Transport
    {
        public int Id { get; set; }
        public string TypePark { get; set; }
        public TransportTypes transportType { get; set; }
        public string Name { get; set; }
        public string Number { get; set; }
        //List<DateSpan>
        public int DriverId { get; set; }
        public Driver Driver { get; set; }
    }
}
