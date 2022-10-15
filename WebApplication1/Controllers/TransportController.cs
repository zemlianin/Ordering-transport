﻿using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [EnableCors("_myAllowSpecificOrigins")]
    [Route("[controller]")]
    public class TransportController : Controller
    {
        [EnableCors("_myAllowSpecificOrigins")]
        [HttpGet("post")]
        public IActionResult Post()
        {
            return Ok();
        }

        [EnableCors("_myAllowSpecificOrigins")]
        [HttpGet("get")]
      /*  public IActionResult Get(string type, string date)
        {
            List<Transport> tr1 = new List<Transport>() { new Transport {Id = 0, Driver = Dr }, new Transport() { } };
            List<Transport> tr2 = new List<Transport>() { new Transport { }, new Transport() { } };

            //  return new Transport[] {new Transport() { DriverId = 1, Id = 1, transportType = "tractor"}, new Transport() { DriverId = 2, Id = 2, transportType = "tractor" } };
        }*/
    }
}
