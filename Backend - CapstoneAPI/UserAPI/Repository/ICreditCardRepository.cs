using UserAPI.Models;

namespace UserAPI.Repository
{
    public interface ICreditCardRepository
    {
        CreditCard GetCreditCard(string email);
        void SaveCreditCard(CreditCard card);
        void UpdateCreditCard(string email, CreditCard card);
        void DeleteCreditCard(string email);
    }
}
