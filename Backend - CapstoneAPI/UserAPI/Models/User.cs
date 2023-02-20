using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Collections.Specialized;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using UserAPI.Models;

namespace UserAPI.Models
{
    public class User
    {
        [BsonId]
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public BsonBinaryData ProfilePic { get; set; }
        public string Role { get; set; } = "User";
        public bool IsBanned { get; set; } = false;
    }
}
