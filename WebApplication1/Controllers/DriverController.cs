using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class DriverController : ControllerBase
    {
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("get")]
        public IActionResult Get(int id)
        {


            using (ApplicationContext db = new ApplicationContext())
            {
                var t = db.Drivers.Where(p => p.Id == id).ToList();
                return Ok(t);
            }

        }

        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("post")]
        public IActionResult Post(int Id, string UserName, string PhoneNumber)
        {

            return Ok(new Driver()
            {
                Id = Id,
                UserName = UserName,
                PhoneNumber = PhoneNumber
            });
        }
    }
}
