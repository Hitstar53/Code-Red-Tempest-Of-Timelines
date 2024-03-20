public class Circle extends Shape{
    void draw(){
        System.out.println("Drawing a circle... \n");
    }

    double calculateArea(int r){
        return r*r*Math.PI; 
    }
}
