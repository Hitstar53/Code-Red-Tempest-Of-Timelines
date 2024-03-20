public class Clerk extends Employee{
    Clerk(int sal, int bonus){
        super(sal, bonus);
        super.salary = (int)(super.salary * 0.5);
    }
    int getSalary(){
        return super.salary;
    }
    int getBonus(){
        return super.bonus;
    }
    int totalSalary(){
        return super.salary + super.bonus;
    }
}

