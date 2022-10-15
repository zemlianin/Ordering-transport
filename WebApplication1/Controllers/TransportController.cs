using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class TransportController : Controller
    {
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpPost("post2")]
        public IActionResult Post()
        {
            return Ok();
        }

        [EnableCors("_myAllowSpecificOrigins")]
        [HttpGet("get")]
        public Tuple<Transport[], Transport[]> Get(string type, string date)
        {
            return new Tuple<Transport[], Transport[]>(new Transport[] { new Transport() {Id = 1, Name = "КАМАЗ 43114", Number = "A114/999",
                TypePark = "Автовышка (35м)", transportType = "JCB 527-58", Driver = new Driver(), DriverId = 1 },
            new Transport() {Id = 3, Name = "КАМАЗ 43114", Number = "A114/100",
                TypePark = "Автовышка (35м)", transportType = "JCB 527-58", Driver = new Driver(), DriverId = 3 }}, 
                new Transport[] { new Transport() {Id = 2, Name = "КАМАЗ 43114", Number = "A114/900",
                TypePark = "Автовышка (35м)", transportType = "JCB 527-58", Driver = new Driver(), DriverId = 2 } });
        }
    }
}
