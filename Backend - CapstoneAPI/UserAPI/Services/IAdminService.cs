using UserAPI.Models;

namespace UserAPI.Services
{
    public interface IAdminService
    {
        List<User> GetUsers();
        User GetUserByID(int id);
        User GetUserByEmail(string email);
        void DeleteUser(int id);
    }
}
