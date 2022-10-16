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
                    var Customer = db.Customers.First(a => userName == a.UserName);
                    var t = db.Forms.Where((p) => p.CustomerId == Customer.Id).ToList();
                    string s = "[";
                    for (int i = 0; i < t.Count(); i++)
                    {
                        s += $"{{\"name\": \"{userName}\",\"lastName\": \"---\",\"telephone\": \"{Customer.PhoneNumber}\",\"beginDate\": \"{t[i].BeginDate}\",\"endDate\": \"{t[i].EndDate}\"," +
                            $"\"address\": \"РоссияZZZ, Архангельская область\",\"typeOfVehicle\": \"{t[i].TransportType},\",\r\n\"priority\": \"{t[i].Priority}\",\r\n\"comment\": \"{t[i].Comment}\"}}";
                        /*s+= JsonSerializer.Serialize<>(new() {name = userName, lastName = "--", telephone = Customer.PhoneNumber, beginDate = t[i].BeginDate, endDate = t[i].EndDate, 
                        address = "РоссияZZZ, Архангельская область",
                            typeOfVehicle = t[i].TransportType,
                            priority = t[i].Priority, comment = t[i].Comment
                        });*/
                        if (i != t.Count - 1)
                            s += ",";
                    }
                    s += "]";
                    return s;
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
