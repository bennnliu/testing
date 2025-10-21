public class test{

public static void main(String[] args){
    Encrypt("sampletext");
}


public static void Encrypt(String input){
    char[] result =  new char[input.length()];
    for (int i = 0; i < input.length(); i++){
        result[i] = input.charAt(i);
         if(result[i] == 'x' || result[i] == 'y' || result[i] == 'z'){
            switch(result[i]){
                case 'x': result[i] = 'z';
                case 'y': result[i] = 'a'; 
                case 'z': result[i] = 'b'; 
            }
         }
        else{
            result[i] += 2;
        }
       
    }
    for (char elem: result){
        System.out.print(elem);
    }
}
}

