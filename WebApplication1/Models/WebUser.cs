namespace WebApplication1.Models
{
    public abstract class WebUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }

        public int PhoneNumber { get; set; }
    }
}
