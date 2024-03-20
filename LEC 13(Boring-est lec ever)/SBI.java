public class SBI extends Bank{
    int amt;

    SBI(){
        super();
        amt=0;
    }

    void setAmt(int amt){
        this.amt = amt;
    }
    void printMoney(int days){
        double money = amt* Math.pow((1+ ((double)super.rate_of_interest/2)),(double)2/12); 
        System.out.println("Money = " + money);
    }
}
