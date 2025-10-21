public class TriangleNumbers{
    public static void main(String[] args) {
        genNum(123);

    }

    public static void genNum(int n){
        int total = 0;
        for (int i = 1; i <= n; i++){
            total += i;
            System.out.print(total + ", ");
        }
    }
}