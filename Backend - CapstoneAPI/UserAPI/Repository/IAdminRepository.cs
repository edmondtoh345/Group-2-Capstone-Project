using UserAPI.Models;

namespace UserAPI.Repository
{
    public interface IAdminRepository
    {
        List<User> GetUsers();
        User GetUserByID(int id);
        User GetUserByEmail(string email);
        void DeleteUser(int id);
    }
}
