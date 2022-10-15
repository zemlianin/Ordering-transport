using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class FormsService
    {
        public Driver Distribution(Form form)
        {
            using (ApplicationContext db = new ApplicationContext())
            {
                SortedDictionary<double,int> dic = new SortedDictionary<double,int>();
                var drivers = db.Drivers;
                for (int i = 0; i < drivers.ToList().Count(); i++)
                {
                    dic
                }
                
            }
            
            ///
            ///
            ///

        }
    }
}
