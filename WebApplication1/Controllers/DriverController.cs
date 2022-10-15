using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient.Server;
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

            try
            {
                using (ApplicationContext db = new ApplicationContext())
                {
                    var t = db.Drivers.Where(p => p.Id == id).ToList();
                    return Ok(t);
                }
            }
            catch (Exception)
            {
                return NotFound($"Не найден водитель c {id}.");
            }

        }

        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("post")]
        public IActionResult Post(int Id, string UserName, string PhoneNumber)
        {

            using (ApplicationContext db = new ApplicationContext())
            {
                db.Drivers.Add(new Driver()
                {
                    Id = Id,
                    UserName = UserName,
                    PhoneNumber = PhoneNumber
                });
                db.SaveChanges();
                return Ok(db.Drivers.Count());
            }

           
        }
    }
}
