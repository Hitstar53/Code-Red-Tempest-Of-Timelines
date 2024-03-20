import java.util.Scanner;

public class BankMain {
    public static void main(String[] args) {
        System.out.println("Enter money deposited in ICICI, SBI and AXIS banks: ");
        AXIS axis = new AXIS();
        ICICI icici = new ICICI();
        SBI sbi = new SBI();
        Scanner sc = new Scanner(System.in);
        icici.setAmt(sc.nextInt());
        sbi.setAmt(sc.nextInt());
        axis.setAmt(sc.nextInt());
        System.out.println("Final money: ");
        System.out.println("Money in ICICI: ");
        icici.printMoney(30);
        System.out.println("Money in AXIS:");
        axis.printMoney(30);
        System.out.println("Money in SBI: ");
        sbi.printMoney(30);
    }
}
