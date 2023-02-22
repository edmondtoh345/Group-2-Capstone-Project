using Email_App_03.Service;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;

[Route("api/[controller]")]
[ApiController]
public class EmailController : ControllerBase
{
    private readonly IEmailService emailService;

    public EmailController(IEmailService emailService)
    {
        this.emailService = emailService;
    }

    [HttpPost]
    public IActionResult SendMail(string to, string subject, string body)
    {
        emailService.SendMail(to, subject, body);
        return Ok("Email sent successfully");
    }

    //[HttpPost("forgot-password")]
    //public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
    //{
    //    // Check if the user exists in the database
    //    var user = await _userService.GetUserByEmail(request.Email);
    //    if (user == null)
    //    {
    //        return BadRequest("User not found");
    //    }

    //    // Generate a unique token
    //    var token = Guid.NewGuid().ToString();

    //    // Store the token in the database along with the user's email and an expiration time
    //    await _userService.CreatePasswordResetToken(user.Id, token);

    //    // Generate the email body using a view template
    //    var model = new ResetPasswordViewModel
    //    {
    //        ResetLink = $"{_appSettings.ResetPasswordBaseUrl}?token={token}"
    //    };
    //    var body = await _viewRenderer.RenderViewAsync("ResetPasswordEmail", model);

    //    // Send the email using the email service
    //    try
    //    {
    //        var message = new EmailMessage
    //        {
    //            To = user.Email,
    //            Subject = "Reset your password",
    //            Body = body
    //        };
    //        await _emailService.SendEmailAsync(message);
    //    }
    //    catch (Exception ex)
    //    {
    //        // Handle the exception and return an appropriate error message
    //        return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
    //    }

    //    return Ok();
    //}
}
