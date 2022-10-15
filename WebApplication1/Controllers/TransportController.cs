using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class TransportController : Controller
    {
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpGet("post")]
        public IActionResult Post(int Id, string TypePark, string transportType, string Name, string Number, int DrivedId)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                db.Transport.Add(new Transport()
                {
                    Id = Id,
                    TypePark = TypePark,   
                    transportType = transportType,
                    Name = Name,
                    Number = Number,
                    DriverId = DrivedId
                });
                db.SaveChanges();
                return Ok(db.Drivers.Count());
            }
        }
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpGet("realget")]
        public IActionResult Get2(string type, string date)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                var t = db.Transport.Where(a => a.TypePark == type);
                return Ok(t);
            }
                
            

        }
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpGet("get")]
        public IActionResult Get(string type, string date)
        {
            List<Transport> tr1 = new List<Transport>() { new Transport { Id = 0, Driver = new Driver(), Name = "Камаз", 
                Number = "117A", DriverId = 1, transportType = "Вышка(35м)", TypePark = "Вышка"  },
                new Transport() {Id = 1, Driver = new Driver(), Name = "Маз",
                Number = "100Б", DriverId = 2, transportType = "Вышка(25м)", TypePark = "Вышка"   } };
            List<Transport> tr2 = new List<Transport>() { new Transport { Id = 3, Driver = new Driver(), Name = "Камаз",
                Number = "117A", DriverId = 1, transportType = "Вышка(35м)", TypePark = "Вышка"  },
                new Transport() {Id = 4, Driver = new Driver(), Name = "Маз",
                Number = "100Б", DriverId = 2, transportType = "Вышка(25м)", TypePark = "Вышка"   } };
            return Ok(new Tuple<List<Transport>, List<Transport>>(tr1, tr2));
         
        }
    }
}
