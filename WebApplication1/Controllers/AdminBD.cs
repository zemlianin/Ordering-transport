using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminBD : Controller
    {
        [HttpGet("get")]
        public IActionResult Get()
        {
            var doing = new FillBD();
            doing.FillingBD();
            return Ok();
        }
    }
}
