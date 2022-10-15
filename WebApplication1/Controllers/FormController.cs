using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Net;
using System.Xml.Linq;
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

        [HttpGet("post")]
        public IActionResult Post(
            string name,
            string lastName,
            string telephon,
            double x,
            double y,
            string beginDate,
            string endDate,
            string typeOfVehicle,
            int priority)
        {
           /* try
            {
                if (beginDate > endDate)
                {
                    return BadRequest("Время начала меньше либо равно времени конца.");
                }*/
            using var context = new ApplicationContext();
            var customer = context.Customers.First(rec => rec.PhoneNumber == telephon && rec.UserName == $"{lastName} {name}");
                
            if (customer == null)
            {
                return NotFound($"Не найден пользователь: {lastName} {name}({telephon}).");
            }
            var form = new Form()
            {
                CustomerId = customer.Id,
                TransportType = typeOfVehicle,
                BeginDate = beginDate,
                EndDate = endDate,
                Location = new Location()
                {
                    X = x,
                    Y = y,
                },
            };
            context.Forms.Add(form);
            context.SaveChanges();
            return Ok();
          /*  }
            catch
            {
                return BadRequest("Что-то пошло не так при отправке формы.");
            }*/
        }

        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("get")]
        public IActionResult Get(int formId)
        {
            using var context = new ApplicationContext();
            var form = context.Forms.FirstOrDefault(rec => rec.Id == formId);
            if (form == null)
            {
                return NotFound($"Не найдена заявка под идентификатором {formId}.");
            }
            return Ok(form);
        }

        
        [EnableCors("_myAllowSpecificOrigins")]

        [HttpGet("delete")]
        public IActionResult Delete(int formId)
        {
            try
            {
                using var context = new ApplicationContext();
                var form = context.Forms.First(item => item.Id == formId);
                context.Forms.Remove(form);
                context.SaveChanges();
                return Ok(context.Forms);
            }
            catch
            {
                return BadRequest("Что-то пошло не так при получении формы.");
            }
            return Ok();
        }
    }
}
