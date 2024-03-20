import java.util.Date;
class Person {
    protected String name;
    protected Date dateOfBirth;

    public Person(String name, Date dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }

    @Override
    public String toString() {
        return "Name: " + name + ", Date of Birth: " + dateOfBirth;
    }
}