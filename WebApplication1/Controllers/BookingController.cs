using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class BookingController : ControllerBase
    {
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("post")]
        public int Post(int a)
        {
            return a;
        }
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("Booking")]
        public int Get()
        {
            return 123;
        }
    }
}
