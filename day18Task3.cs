using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter Name: ");
        string name = Console.ReadLine();

        Console.Write("Enter Salary: ");
        double salary = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Experience: ");
        int exp = Convert.ToInt32(Console.ReadLine());

        double bonus;

        if (exp < 2)
            bonus = salary * 0.05;
        else if (exp <= 5)
            bonus = salary * 0.10;
        else
            bonus = salary * 0.15;

        double finalSalary = salary + bonus;

        Console.WriteLine("Employee: " + name);
        Console.WriteLine("Bonus: " + bonus);
        Console.WriteLine("Final Salary: " + finalSalary);
    }
}