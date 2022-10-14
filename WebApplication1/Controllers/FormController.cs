using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class FormController : ControllerBase
    {
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpPost("post")]
        public IActionResult Post(int phoneNumber, string userName, string transportType, DateTime date)
        {
            
        }
    }
}
