using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UserAPI.Filters;
using UserAPI.Models;
using UserAPI.Services;

namespace UserAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AppException]
    public class UserController : ControllerBase
    {
        private readonly IAdminService admin;
        private readonly IUserService service;
        private readonly ITokenGeneratorService token;
        public UserController(IAdminService admin, IUserService service, ITokenGeneratorService token)
        {
            this.admin = admin;
            this.service = service;
            this.token = token;
        }

        // For User to register
        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            service.Register(user);
            return StatusCode(201, "User registered successfully");
        }

        // [Authorize(Roles = "User, Admin")]
        // For User and Admin to login
        [HttpPost("login")]
        public IActionResult Login(Cred user)
        {
            service.Login(user.Email, user.Password);
            return Ok(token.GenerateToken(user.Email));
        }

        // For User and Admin to update user details
        [HttpPut("{UserEmail}")]
        public IActionResult UpdateUser(string UserEmail, User user)
        {
            service.UpdateUser(UserEmail, user);
            return StatusCode(201, "User details updated successfully!");
        }

        // The below codes are for Administrator functions

        // For Admin to delete user
        [Authorize(Roles = "Admin")]
        [HttpDelete("{UserID}")]
        public IActionResult DeleteUser(int UserID)
        {
            admin.DeleteUser(UserID);
            return Ok($"User with ID: {UserID} deleted successfully!");
        }

        // For Admin to get user details by email
        [Authorize(Roles = "Admin")]
        [HttpGet("byemail/{UserEmail}")]
        public IActionResult GetUserByEmail(string UserEmail)
        {
            return Ok(admin.GetUserByEmail(UserEmail));
        }

        // For Admin to get user details by ID
        [Authorize(Roles = "Admin")]
        [HttpGet("byid/{UserID}")]
        public IActionResult GetUserByID(int UserID)
        {
            return Ok(admin.GetUserByID(UserID));
        }

        // For Admin to get all users
        [Authorize(Roles = "Admin")]
        [HttpGet("users")]
        public IActionResult GetAllUsers()
        {
            return Ok(admin.GetUsers());
        }
    }
}
