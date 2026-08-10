package expenses;
import java.util.Scanner;
public class projmain {
    private static String id;
        public static void main(String[] args) throws Exception{
        Scanner sc=new Scanner(System.in);
        while(true){
        System.out.println("******Welcome to the Friends Splitter System");
        System.out.println("1.Login");
        System.out.println("2.Signup");
        System.out.println("3.Exit");
        System.out.println("***Enter your Choice***");
        
        int ch=sc.nextInt();
            if(ch!=3){
            dataoperations obj1=new dataoperations();
            switch (ch){
                case 1:
                    //obj1.loginFriend();
                    projmain.id=obj1.loginFriend();
                    if(projmain.id!=null){
                        while(true){
                            System.out.println("------------------------------");             
                            System.out.println("1.Enter distribution details");
                            System.out.println("2.Enter Pay bill amount");
                            System.out.println("3.Display total to be paid");
                            System.out.println("4.Display my transactions");
                            System.out.println("5.Display all transactions");
                            System.out.println("6.logout");
                            System.out.print("***Enter you choice***");
                            int ch1=sc.nextInt();

                            if(ch1==6) 
                            break;
                            if(ch1>6)
                                System.out.println("Invalid Option is Selected\n");
                            if(ch1<=0)
                                System.out.println("Enter Valid Choice\n");

                            switch (ch1){
                                case 1:
                                    obj1.enterDistribution(projmain.id);
                                    break;
                                case 2:
                                    obj1.payBill(projmain.id);
                                    break;
                                case 3:
                                    obj1.displaytotal(projmain.id);
                                    break;
                                case 4:
                                    obj1.dispalymytransactions(projmain.id);
                                    break;                        
                                case 5:
                                    obj1.dispalyalltransactions();
                                    break;
                                default:
                                    break;
                            }             
                        }
                    }
                    else
                        System.out.println("Login failed. Try Again\n");
                            break;
                case 2:
                    obj1.signupFriend();
                        break;
                default:
                    System.out.println("Enter Valid Choice");
                        break;
            }
            }   
        else{   
        System.out.println("***Splitting System is Sucessfully Shutdowned***");
        break;
        }
        
        }        
    
    }
}