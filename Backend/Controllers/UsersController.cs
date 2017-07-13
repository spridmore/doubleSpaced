using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Net.Http;

namespace third_phase_app.Controllers
{
    public class User {
        public int UserScore { get; set;}
        public string Name { get; set;}
        public int Id { get; set;}
    }
    
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly UserContext _context;
        
        public UserController(UserContext context)
        {
          _context = context;
        }
        
        // GET api/values
        [HttpGet]
        public IEnumerable<User> Get()
        {
          if(_context.UserStats.Count() == 0){
          _context.UserStats.Add(new User(){UserScore = 10, Name = "Dongle Guy", Id = 0});                      
          _context.UserStats.Add(new User(){UserScore = 4, Name = "Yuri Gagarin", Id = 0});          
          _context.UserStats.Add(new User(){UserScore = 8, Name = "Sally Ride", Id = 0});          
          _context.UserStats.Add(new User(){UserScore = 3, Name = "Burger King", Id = 0});          
          _context.UserStats.Add(new User(){UserScore = 1, Name = "Matt Damon", Id = 0});          
          }
          _context.SaveChanges();
          
          return _context.UserStats;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]User value)
        {
          _context.Add(value);
          _context.SaveChanges();
        }
    }
}
