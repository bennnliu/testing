public class Hourglass {
    public static void main(String[] args) {
        genHourGlass(6);
    }

    public static void genHourGlass(int n){
        for(int i = 1; i <= n; i++){
            System.out.print("*");
        }
        System.out.println();

        for(int j = n/2; j > 0; j--) {
            for(int l = 0; j < j; l++){
                System.out.print(" ");
            }
            System.out.print("*");
            for(int k = j-2; k > 0; k--){
                System.out.print(" ");
            }
            System.out.print("*");
        }
        System.out.println();
        for(int i = 1; i <= n; i++){
            System.out.print("*");
        }
    
}
}