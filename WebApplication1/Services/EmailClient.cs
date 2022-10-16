using Microsoft.Extensions.Hosting;
using System.IO;
using System.Net.Mail;
using System.Net;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class EmailClient
    {
        public string from = "";
        public string login = "";
        public string to = "";
        public string password = "";
        public string host = "smtp.yandex.ru";
        public int port = 25;
        public EmailClient(string from, string login, string to, string password)
        {
            this.from = from;
            this.login = login;
            this.to = to;
            this.password = password;
        }
        public void SendMail(Form form, Transport transport)
        {
            Driver dr;
            using (ApplicationContext db = new ApplicationContext())
            {
                dr = db.Drivers.First(a => a.Id == transport.DriverId);
            }
            MailMessage mail = new MailMessage();
            mail.From = new MailAddress(from); // Адрес отправителя
            mail.To.Add(new MailAddress(to)); // Адрес получателя
            mail.Subject = $"Ответ на заявку номер {form.Id}";
            mail.Body = $"Здравтсвуйте! Рады сообщить, что Ваша заявка на использование {form.TransportType}, одобрена.\nC {form.BeginDate} до {form.EndDate}, " +
                $"транспорт под номером {transport.Number} будет при сутствовать на вашем объекте.\n" +
                $" Контакты для связи: {dr.UserName} - {dr.PhoneNumber}   ";
            SmtpClient client = new SmtpClient();
            client.Host = host;
            client.Port = port;              
            client.Credentials = new NetworkCredential(login, password); // Ваши логин и пароль
            client.EnableSsl = true;
            client.Send(mail);

        }
    }
}
