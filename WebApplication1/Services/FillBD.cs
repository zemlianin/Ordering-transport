using Microsoft.AspNetCore.Components;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class FillBD
    {
        public void FillingBD()
        {

        
            using (ApplicationContext db = new ApplicationContext())
            {
                db.Database.EnsureDeleted();
                var Customer1 = new Customer() { Id = 1, UserName = "Menadger Ivan", PhoneNumber = "89155762345" };
                var Customer2 = new Customer() { Id = 2, UserName = "Menadger Max", PhoneNumber = "89155999999" };
                var Customer3 = new Customer() { Id = 3, UserName = "Menadger Anya", PhoneNumber = "89155898945" };
                var Customer4 = new Customer() { Id = 4, UserName = "Menadger John", PhoneNumber = "89150987345" };
                var Customer5 = new Customer() { Id = 5, UserName = "Menadger Alex", PhoneNumber = "89155760987" };
                db.Customers.Add(Customer1);
                db.Customers.Add(Customer2);
                db.Customers.Add(Customer3);
                db.Customers.Add(Customer4);
                db.Customers.Add(Customer5);

                var Dispatcher1 = new Duspatcher() { Id = 1, UserName = "Dispather Alex", PhoneNumber = "89155799987" };
                var Dispatcher2 = new Duspatcher() { Id = 2, UserName = "Dispather Ivan", PhoneNumber = "89155712987" };
                var Dispatcher3 = new Duspatcher() { Id = 3, UserName = "Dispather Anya", PhoneNumber = "89155712987" };
                var Dispatcher4 = new Duspatcher() { Id = 4, UserName = "Dispather John", PhoneNumber = "89155756987" };
                var Dispatcher5 = new Duspatcher() { Id = 5, UserName = "Dispather Max", PhoneNumber = "89155761287" };

                db.Dispatchers.Add(Dispatcher1);
                db.Dispatchers.Add(Dispatcher2);
                db.Dispatchers.Add(Dispatcher3);
                db.Dispatchers.Add(Dispatcher4);
                db.Dispatchers.Add(Dispatcher5);


            }
        }
    }
}
