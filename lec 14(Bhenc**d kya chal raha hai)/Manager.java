public class Manager extends Employee {
    Manager(int sal, int bonus){
        super(sal, bonus);
        super.salary = (int)(super.salary * 2);
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

