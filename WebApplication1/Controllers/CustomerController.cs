using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using WebApplication1.Enums;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class CustomerController : ControllerBase
    {
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("get")]
        public string Get(string userName)
        {
            try
            {

                using (ApplicationContext db = new ApplicationContext())
                {
                    var CustomerId = db.Customers.First(a => userName == a.UserName).Id;
                    var t = db.Forms.Where((p) => p.CustomerId == CustomerId).ToList();
                    return JsonSerializer.Serialize(t);
                }
            }
            catch (Exception ex)
            {
                return "";
            }
        }

        [HttpPost("post")]
        public IActionResult Post(Customer cust)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                db.Customers.Add(cust);
                db.SaveChanges();
                return Ok(db.Customers.Count());
            }
            
                
        }

    }
}
