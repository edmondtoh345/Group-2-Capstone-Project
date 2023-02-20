using UserAPI.Exceptions;
using UserAPI.Models;
using UserAPI.Repository;

namespace UserAPI.Services
{
    public class AdminService : IAdminService
    {
        private readonly IAdminRepository repo;
        public AdminService(IAdminRepository repo)
        {
            this.repo = repo;
        }

        public void DeleteUser(int id)
        {
            if (repo.GetUserByID(id) == null)
            {
                throw new UserNotFoundException($"User with ID: {id} does not exists!");
            }
            repo.DeleteUser(id);
        }

        public User GetUserByEmail(string email)
        {
            if (repo.GetUserByEmail(email) == null)
            {
                throw new UserNotFoundException($"User with Email: {email} does not exists!");
            }
            return repo.GetUserByEmail(email);
        }

        public User GetUserByID(int id)
        {
            if (repo.GetUserByID(id) == null)
            {
                throw new UserNotFoundException($"User with ID: {id} does not exists!");
            }       
            return repo.GetUserByID(id);
        }

        public List<User> GetUsers()
        {
            return repo.GetUsers();
        }
    }
}
