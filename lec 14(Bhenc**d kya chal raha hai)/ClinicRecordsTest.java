import java.util.Date;
public class ClinicRecordsTest {
    public static void main(String[] args) {
        // Test driver program

        // Creating doctors
        Doctor doctor1 = new Doctor("Dr. Smith", new Date(), "Cardiologist", 5000);
        Doctor doctor2 = new Doctor("Dr. Johnson", new Date(), "Neurologist", 6000);

        // Creating patients
        Patient patient1 = new Patient("John Doe", new Date(), doctor1);
        Patient patient2 = new Patient("Jane Smith", new Date(), doctor2);

        // Creating billing records
        Billing billing1 = new Billing(patient1, doctor1, new Date(), 0);
        Billing billing2 = new Billing(patient2, doctor2, new Date(), 0);

        // Calculate and update billing amounts
        billing1.amountDue = billing1.calculateBill();
        billing2.amountDue = billing2.calculateBill();

        // Update doctors' income
        doctor1.updateIncome(3); // Assuming 3 days since patient admitted
        doctor2.updateIncome(4); // Assuming 4 days since patient admitted

        // Displaying information
        System.out.println("Doctor 1 Information: " + doctor1);
        System.out.println("Doctor 2 Information: " + doctor2);
        System.out.println("Patient 1 Information: " + patient1);
        System.out.println("Patient 2 Information: " + patient2);
        System.out.println("Billing 1 Information: " + billing1);
        System.out.println("Billing 2 Information: " + billing2);

        // Calculate and display total income
        double totalIncome = doctor1.income + doctor2.income;
        System.out.println("Total Income: " + totalIncome);
    }
}
