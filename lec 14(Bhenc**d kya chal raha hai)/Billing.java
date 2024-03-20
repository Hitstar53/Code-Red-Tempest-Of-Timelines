import java.util.Date;
class Billing {
    private Patient patient;
    private Doctor doctor;
     Date billDate;
     double amountDue;

    public Billing(Patient patient, Doctor doctor, Date billDate, double amountDue) {
        this.patient = patient;
        this.doctor = doctor;
        this.billDate = billDate;
        this.amountDue = amountDue;
    }

    public double calculateBill() {
        int days = (int) ((billDate.getTime() - patient.dateOfBirth.getTime()) / (1000 * 60 * 60 * 24));
        double doctorFees = doctor.getFees();
        return (days * 2000) + (doctorFees * days);
    }

    @Override
    public String toString() {
        return "Patient: " + patient.name + ", Doctor: " + doctor.name + ", Bill Date: " + billDate + ", Amount Due: " + amountDue;
    }
}