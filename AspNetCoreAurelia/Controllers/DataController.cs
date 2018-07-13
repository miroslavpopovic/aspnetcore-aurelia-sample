using System;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreAurelia.Controllers
{
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class DataController : Controller
    {
        [HttpGet("/api/data")]
        public IActionResult Index()
        {
            return Ok(new {data = new Random().Next(1, 100)});
        }
    }
}