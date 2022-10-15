using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult Get(int formId)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
               return  Ok(db.Customers.ToArray());
            }
        }

        [HttpPost("post")]
        public IActionResult Post(Customer cust)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                db.Customers.Add(cust);
                return Ok(db.Customers.Count());
            }
            
                
        }

    }
}
