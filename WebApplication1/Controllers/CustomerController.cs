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
        public IActionResult Get(int CustomerId)
        {
            try
            {
                using (ApplicationContext db = new ApplicationContext())
                {
                    var t = db.Customers.Where(p => p.Id == CustomerId).ToList()[0].Forms;
                    return Ok(t);
                }
            }
            catch (Exception ex)
            {
                return NotFound($"Не найден заказчик с id = {CustomerId}");
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
