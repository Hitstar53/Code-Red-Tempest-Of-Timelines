import java.util.Date;
class Patient extends Person {
    private Doctor doctor;

    public Patient(String name, Date dateOfBirth, Doctor doctor) {
        super(name, dateOfBirth);
        this.doctor = doctor;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    @Override
    public String toString() {
        return super.toString() + ", Doctor: " + doctor.name;
    }
}