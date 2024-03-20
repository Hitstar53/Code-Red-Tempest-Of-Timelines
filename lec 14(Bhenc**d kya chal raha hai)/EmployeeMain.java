import java.util.Scanner;

public class EmployeeMain {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter base salary and bonus for employee who is an intern: ");
        Intern intern = new Intern(sc.nextInt(), sc.nextInt());
        System.out.println("Enter base salary and bonus for employee who is an clerk: ");
        Clerk clerk = new Clerk(sc.nextInt(), sc.nextInt());
        System.out.println("Enter base salary and bonus for employee who is an manager: ");
        Manager manager = new Manager(sc.nextInt(), sc.nextInt());
        System.out.println("Printing manager salary: ");
        System.out.println(manager.totalSalary());
        System.out.println("Printing clerk salary: ");
        System.out.println(clerk.totalSalary());
        System.out.println("Printing intern salary: ");
        System.out.println(intern.totalSalary());
    }
}
