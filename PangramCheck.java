import java.util.Scanner;

public class PangramCheck {
    public static boolean isPangram(String str) {
        str = str.toLowerCase();
        for (char letter = 'a'; letter <= 'z'; letter++) {
            if (str.indexOf(letter) == -1) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence : ");
        String input = scanner.nextLine();
        scanner.close();

        boolean result = isPangram(input);
        if (result) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }
}
