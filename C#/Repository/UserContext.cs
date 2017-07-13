using Microsoft.EntityFrameworkCore;
using third_phase_app.Controllers;

namespace third_phase_app
{
  public class UserContext : DbContext
  {
    public UserContext(DbContextOptions<UserContext> options) : base(options)
    {

    }
    
    public DbSet<User> UserStats { get; set; }
    // public DbSet<PlayerName> PlayerNames { get; set; }
  }


}