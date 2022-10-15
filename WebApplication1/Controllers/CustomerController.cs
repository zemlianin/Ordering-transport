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
            return Ok(new List<Form>(){
                new Form()
                {
                    Id = formId,
                    BeginDate = DateTime.Now,
                    EndDate = DateTime.Now.AddDays(2),
                } 
            });
        }

    }
}
