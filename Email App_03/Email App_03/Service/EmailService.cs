using MailKit.Net.Smtp;
using MimeKit;

namespace Email_App_03.Service
{
    public class EmailService : IEmailService
    {
        public void SendMail(string to, string subject, string body)
        {
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("group2transportapi@gmail.com"));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = subject;
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = body };

            using var smtp = new SmtpClient();
            smtp.Connect("smtp.gmail.com", 587, MailKit.Security.SecureSocketOptions.StartTls);
            smtp.Authenticate("group2transportapi@gmail.com", "gsuutifunpsqrzsc");
            smtp.Send(email);
            smtp.Disconnect(true);

        }
    }
}