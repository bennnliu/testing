public class Euler {
    public static void main(String[] args) {
        Euler(1000);
    }

    public static void Euler(int n){
        int total = 0;
        for (int i = 1; i < n; i++){
            if (i % 3 == 0 || i % 5 == 0){
                total += i;
            }
        }

        System.out.println(total);
    }
}
