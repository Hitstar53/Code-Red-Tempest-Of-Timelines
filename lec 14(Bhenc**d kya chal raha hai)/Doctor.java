import java.util.Date;
class Doctor extends Person {
    private String speciality;
    private double fees;
    protected double income;

    public Doctor(String name, Date dateOfBirth, String speciality, double fees) {
        super(name, dateOfBirth);
        this.speciality = speciality;
        this.fees = fees;
        this.income = 0.0;
    }

    public double getFees() {
        return fees;
    }

    public void updateIncome(int days) {
        this.income += fees * days;
    }

    @Override
    public String toString() {
        return super.toString() + ", Speciality: " + speciality + ", Fees: " + fees + ", Income: " + income;
    }
}