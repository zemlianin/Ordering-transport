using WebApplication1.Models;
using WebApplication1.Helpers;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class FormsService
    {
        public double Range { get; }

         public FormsService(double range = 10.0)
         {
             Range = range;
         }

         public void Distribute(Form form)
         {
             using (ApplicationContext db = new ApplicationContext())
             {
                 var transports = db.Transport.
                     Where(a => a.transportType == form.TransportType).
                     Where(a => DistanceHelper.DistanceInKm(
                         a.Driver.CurrentLocation,
                         form.Location) < Range).
                     ToList();
                 // TOOD: Send to drivers
             }
         }
    }
}