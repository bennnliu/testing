public class Reverse{
    public static void main(String[] args) {
        reverse("The quick brown fox jumps over the lazy dog.");
    }

    public static void reverse(String input){
        char[] array = new char[input.length()];
        int j = 0;
        for(int i = input.length() - 1; i >= 0; i--){
            array[i] = input.charAt(j);
            j++;
        }

        for(char elem: array){
            System.out.print(elem);
        }
    }
}