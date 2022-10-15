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
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Form>()
                .Ignore(e => e.Location);
                 
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=localhost;Port=8080;User Id=app;Password=app;Database=mydbname2;");
        }
    }
}
