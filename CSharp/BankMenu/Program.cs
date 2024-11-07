
public class Program
{
    static void Main(string[] args)
    {
        // Printing the starting menu - using lines
        Console.WriteLine("******************** George Bank ********************");
        Console.WriteLine("::LOGIN PAGE::");

        //Initializing our two variables
        string username = null, password = null; //When you have variables of the same type you can declare them at the same line


        //Asking for username - readline read my input
        Console.Write("Username: ");
        username = Console.ReadLine();
        
        //If username is not an empty string ask for the password
        if (username != "")
        {
            Console.Write("Password: ");
            password = Console.ReadLine();
        }

        //If the username and the password are the ones below - execute the following lines
        if(username == "system" && password == "manager")
        {
            
            int mainMenuChoice = -1;

            //First you execute and then you check if the user inserted the right input
            do
            {
                Console.WriteLine("\n::: Main Menu :::");

                Console.WriteLine("1. Customers");
                Console.WriteLine("2. Accounts");
                Console.WriteLine("3. Funds Transfer");
                Console.WriteLine("4. Funds Transfer Statement");
                Console.WriteLine("5. Account Statement");
                Console.WriteLine("0. Exit");

                Console.Write("Choose one of the numbers above: ");
                mainMenuChoice = int.Parse(Console.ReadLine());

                switch (mainMenuChoice)
                {
                    case 1: CustomersMenu(); break;
                    case 2: AccountsMenu(); break;
                    case 3: break;
                    case 4: break;
                    case 5: break;

                }
            }
            while (mainMenuChoice != 0); 
        }
        else
        {
            Console.WriteLine("Invalid username or password");
        }

        Console.WriteLine("Thank you! Visit us again");
    }

//Presenting customer's menu
    static void CustomersMenu()
        {
            int customerMenuChoice = -1;

            do
            {
                Console.WriteLine("\n ::: Customers menu :::");
                Console.WriteLine("1. Add Customer");
                Console.WriteLine("2. Delete Customer");
                Console.WriteLine("3. Update Customer");
                Console.WriteLine("4. View Customer");
                Console.WriteLine("0. Back to Main Menu");

                Console.Write("Choose one of the numbers above ");

                customerMenuChoice = int.Parse(Console.ReadLine());


            } while (customerMenuChoice != 0); 
        }

    //Presenting Accounts Menu 
    static void AccountsMenu()
        {
            int accountsMenuChoice = -1;

            do
            {
                Console.WriteLine("\n :::Accounts Menu:::");
                Console.WriteLine("1. Add Account");
                Console.WriteLine("2. Delete Account");
                Console.WriteLine("3. Update Account");
                Console.WriteLine("4. View Account");
                Console.WriteLine("0. Back to Main Menu");

                Console.Write("Choose one of the numbers above ");

                accountsMenuChoice = int.Parse(Console.ReadLine());


        } while (accountsMenuChoice != 0);
        }

}