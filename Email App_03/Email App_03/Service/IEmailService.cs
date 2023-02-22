namespace Email_App_03.Service
{
    public interface IEmailService
    {
        void SendMail(string to, string subject, string body);
    }
}
