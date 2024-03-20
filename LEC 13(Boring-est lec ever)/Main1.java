import java.util.Scanner;

public class Main1 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Shape ob = new Shape();
        ob.draw();
        System.out.println("Enter radius of circle: ");
        Circle c = new Circle();
        System.out.println("Area is= " +c.calculateArea(sc.nextInt()));
        c.draw();
        Square s = new Square();
        System.out.println("Enter side of square");
        System.out.println("Area is= " + s.calculateArea(sc.nextInt()));
        s.draw();
        Traingle t = new Traingle();
        System.out.println("Enter sides of traingle");
        System.out.println("Area is= " + t.calculateArea(sc.nextInt(), sc.nextInt(), sc.nextInt()));
    }   
}
