public class Traingle extends Shape{
    void draw(){
        System.out.println("Drawing a triangle... \n");
    }
    double calculateArea(int s1, int s2, int s3){
        double sp = ((double)s1 + s2+ s3)/2;
        return Math.sqrt(sp* (sp-s1) * (sp-s2) * (sp - s3));
    }
}
