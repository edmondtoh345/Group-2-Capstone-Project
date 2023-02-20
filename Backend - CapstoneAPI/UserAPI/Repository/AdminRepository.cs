using MongoDB.Driver;
using UserAPI.Models;

namespace UserAPI.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly DataContext db;
        public AdminRepository(DataContext db)
        {
            this.db = db;
        }

        public void DeleteUser(int id)
        {
            var filter = Builders<User>.Filter.Where(x => x.UserID == id);
            db.Users.DeleteOne(filter);
        }

        public User GetUserByID(int id)
        {
            return db.Users.Find(x => x.UserID == id).FirstOrDefault();
        }

        public User GetUserByEmail(string email)
        {
            return db.Users.Find(x => x.Email == email).FirstOrDefault();
        }

        public List<User> GetUsers()
        {
            return db.Users.Find(user => true).ToList(); ;
        }
    }
}
