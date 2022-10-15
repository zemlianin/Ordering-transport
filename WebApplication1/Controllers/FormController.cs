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
    public class FormController : ControllerBase
    {
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpPost("post")]
        public IActionResult Post(int customerId, string transportType, DateTime beginDate, DateTime endDate)
        {
            /*try
            {
                if (beginDate > endDate)
                {
                    return BadRequest("Время начала меньше либо равно времени конца.");
                }
                using var context = new ApplicationContext();
                context.Forms.Add(new()
                {
                    CustomeId = customerId,
                    TransportType = transportType,
                    BeginDate = beginDate,
                    EndDate = endDate,
                });
                context.SaveChanges();
                return Ok();
            } catch
            {
                return BadRequest("Что-то пошло не так при отправке формы.");
            }*/
            return Ok();
        }

        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("get")]
        public IActionResult Get(int formId)
        {
            return Ok(new Form()
            {
                Id = formId,
                BeginDate = DateTime.Now,
                EndDate = DateTime.Now.AddDays(2),
            });
        }


        [EnableCors("_myAllowSpecificOrigins")]

        [HttpDelete("delete")]
        public IActionResult Delete(int formId)
        {
            /*try
            {
                using var context = new ApplicationContext();
                var form = context.Forms.First(item => item.Id == formId);
                var answer = context.Forms.Remove(form);
                context.SaveChanges();
                return Ok(answer);
            }
            catch
            {
                return BadRequest("Что-то пошло не так при получении формы.");
            }*/
            return Ok();
        }
    }
}
