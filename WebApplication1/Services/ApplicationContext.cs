using System.Collections.Generic;
using Microsoft.AspNetCore.Components;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class ApplicationContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<WebApplication1.Models.Duspatcher> Dispatchers { get; set; }
        public DbSet<Form> Forms { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public ApplicationContext()
        {
            Database.EnsureDeleted();
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=postgres;Port=5432;User Id=app;Password=app;Database=mydbname2;");
        }
    }
}
