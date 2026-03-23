import java.util.Scanner;

public class RegistrationChecker {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("Enter student name: ");
        String name = input.nextLine();

        System.out.print("Enter number of registered units: ");
        int units = input.nextInt();

        String status = (units > 7) ? "Overload - Approval Required" : "Registration Accepted";

        System.out.println("\n--- Final Summary ---");
        System.out.println("Student Name: " + name);
        System.out.println("Units: " + units);
        System.out.println("Status: " + status);
    }
}
