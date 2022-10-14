using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    public class BookingCopyController : Controller
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
