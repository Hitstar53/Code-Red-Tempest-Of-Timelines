class Employee{
    int salary;
    Employee(){
        salary = 10000;
        bonus=0;
    }
    Employee(int sal, int Bonus){
        salary= sal;
        bonus = Bonus;
    }
    int getSalary(){
        return salary;
    }
    int bonus;
    int getBonus(){
        return bonus;
    }
}