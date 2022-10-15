using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class TransportController : Controller
    {
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpPost("post")]
        public IActionResult Post()
        {
            return Ok();
        }

        [HttpPost("get")]
        public IActionResult Post(int phoneNumber, string userName, string transportType, DateTime date)
        {
            return Ok();
        }
    }
}
