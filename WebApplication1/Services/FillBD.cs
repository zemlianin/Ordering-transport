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
                db.Database.EnsureCreated();
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


                var Driver1 = new Driver() { Id = 1, UserName = "Driver Alex", PhoneNumber = "89155799987", CurrentLocation = new Location() { X = 1, Y = 2 } };
                var Driver2 = new Driver() { Id = 2, UserName = "Driver Ivan", PhoneNumber = "81255799987", CurrentLocation = new Location() { X = 4, Y = 1 } };
                var Driver3 = new Driver() { Id = 3, UserName = "Driver Anya", PhoneNumber = "83255799987" , CurrentLocation = new Location() { X = 3, Y = 1 } };
                var Driver4 = new Driver() { Id = 4, UserName = "Driver Max", PhoneNumber = "89545599987" , CurrentLocation = new Location() { X = 2, Y = 1 } };
                var Driver5 = new Driver() { Id = 5, UserName = "Driver John", PhoneNumber = "89980599987", CurrentLocation = new Location() { X = 1, Y = 0 } } ;

                db.Drivers.Add(Driver1);
                db.Drivers.Add(Driver2);
                db.Drivers.Add(Driver3);
                db.Drivers.Add(Driver4);
                db.Drivers.Add(Driver5);


                var Transport1 = new Transport()
                {
                    Id = 1,
                    TypePark = "Парк автовышек",
                    transportType = "Автовышка (28 м)",
                    Number = "А095АА/999",
                    Name = "Чайка Сервис 2784SG",
                    DriverId = 1
                };
                var Transport2 = new Transport()
                {
                    Id = 2,
                    TypePark = "Парк автовышек",
                    transportType = "Автовышка (32 м)",
                    Number = "А107АА/999",
                    Name = "КАМАЗ 43114",
                    DriverId = 2
                };
                var Transport3 = new Transport()
                {
                    Id = 3,
                    TypePark = "Парк погрузчиков",
                    transportType = "Погрузчик_Телескопический",
                    Number = "А618АА/999",
                    Name = "Bobcat T2250",
                    DriverId = 3
                };
                var Transport4 = new Transport()
                {
                    Id = 4,
                    TypePark = "Парк погрузчиков",
                    transportType = "Погрузчик_Фронтальный",
                    Number = "А627АА/999",
                    Name = "Dressta-534Е",
                    DriverId = 4
                };
                var Transport5 = new Transport()
                {
                    Id = 5,
                    TypePark = "Парк погрузчиков",
                    transportType = "Погрузчик_Фронтальный",
                    Number = "А630АА/999",
                    Name = "HYUNDAI HL760-7A",
                    DriverId = 4
                };

                db.Transport.Add(Transport1);
                db.Transport.Add(Transport2);
                db.Transport.Add(Transport3);
                db.Transport.Add(Transport4);
                db.Transport.Add(Transport5);


                var Form1 = new Form()
                {
                    Id = 1,
                    CustomerId = 1,
                    TransportType = "Погрузчик_Фронтальный",
                    Location = new Location() { X = 1, Y = 2 },
                    BeginDate = "1.1.2020",
                    EndDate = "2.1.2020"
                };
                var Form2 = new Form()
                {
                    Id = 2,
                    CustomerId = 1,
                    TransportType = "Погрузчик_Фронтальный",
                    Location = new Location() { X = 2, Y = 4 },
                    BeginDate = "4.1.2020",
                    EndDate = "5.1.2020"
                };
                var Form3 = new Form()
                {
                    Id = 3,
                    CustomerId = 2,
                    TransportType = "Погрузчик_Телескопический",
                    Location = new Location() { X = 5, Y = 6 },
                    BeginDate = "8.1.2020",
                    EndDate = "9.1.2020"
                };
                var Form4 = new Form()
                {
                    Id = 4,
                    CustomerId = 3,
                    TransportType = "Автовышка (32 м)",
                    Location = new Location() { X = 12, Y = 34 },
                    BeginDate = "10.1.2020",
                    EndDate = "11.1.2020"
                };
                var Form5 = new Form()
                {
                    Id = 5,
                    CustomerId = 4,
                    TransportType = "Автовышка (28 м)",
                    Location = new Location() { X = 1, Y = 2 },
                    BeginDate = "7.1.2020",
                    EndDate = "8.1.2020"
                };
                db.Forms.Add(Form1);
                db.Forms.Add(Form2);
                db.Forms.Add(Form3);
                db.Forms.Add(Form4);
                db.Forms.Add(Form5);


                db.SaveChanges();
            }
        }
    }
}
