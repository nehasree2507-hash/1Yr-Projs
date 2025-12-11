package expenses;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class dataoperations {
    public void signupFriend()throws Exception
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter name:");
        String name=sc.next();
        System.out.println("Enter mobile No.:");
        String mobile=sc.next();
        System.out.println("Enter address:");
        String address=sc.next();
        System.out.println("Enter id:");
        String id=sc.next();
        System.out.println("Enter pwd");
        String pwd=sc.next();
        Friends fd1=new Friends(name, mobile, address, id, pwd) ;   
        FileWriter fw=new FileWriter("Friends.txt",true);
        BufferedWriter bw=new BufferedWriter(fw);
        bw.write(fd1.toString());
        bw.newLine();
        bw.close();
        fw.close();
        System.out.println("Signup Successful");
        
    }

    public String loginFriend() throws Exception{
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter id:");
        String id=sc.next();
        System.out.println("Enter pwd:");
        String pwd=sc.next();
        FileReader fr=new FileReader("Friends.txt");
        BufferedReader br=new BufferedReader(fr);
        String line=null;
        Boolean status=false;

        while((line=br.readLine())!=null){
            String[] vardata=line.split("\\|");
            if((id.equals(vardata[3])&&pwd.equals(vardata[4]))){
                System.out.println("\nSuccesfully LoggedIn");
                status=true;
                System.out.println("First name: "+vardata[0]);
                System.out.println("User ID: "+vardata[1]);
                System.out.println("Address: "+vardata[2]);
                break;
            }
        }
        if(status==false)
            System.out.println("Login failed");
        br.close();
        fr.close();
        if(status==true)
        {
            return id;
        }
        else{
            return null;
        }
    }

    public void enterDistribution(String id)throws Exception{
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter amount:");
        double amount=sc.nextDouble();
        System.out.println("Enter description:");
        String desc=sc.next();
        LocalDate localDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");
        String date=localDate.format(formatter);;
        Accounts ac1=new Accounts(id, amount, date, desc);
        FileWriter fw=new FileWriter("Account.txt",true);
        BufferedWriter bw=new BufferedWriter(fw);
        bw.write(ac1.toString());
        bw.newLine();
        bw.close();
        fw.close();
        System.out.println("Record has been Created");
    }

    public void dispalyalltransactions() throws Exception{
        FileReader fr=new FileReader("Account.txt");
        BufferedReader br=new BufferedReader(fr);
        String line=null;
        Boolean status=false;

        while((line=br.readLine())!=null){
             System.out.println(line);
        }       
        br.close();
        fr.close();  
    }     

    public void displaytotal(String id) throws Exception{
        System.out.println(id+ " You're supposed to Pay: ");
        FileReader fr=new FileReader("Account.txt");
        BufferedReader br=new BufferedReader(fr);
        String line=null;
        Boolean status=false;
        double sum=0;

        while((line=br.readLine())!=null){
            String[] vardata=line.split("\\|");
            if(id.equals(vardata[0])){
                double amount=Double.parseDouble(vardata[1]);
                sum=sum+amount;    
            }
        }
        System.out.println("Please do Pay:"+sum);
        br.close();
        fr.close();  
    
    }

    public void dispalymytransactions(String id) throws Exception{
        System.out.println(id+ " You're Transaction History\n");
        FileReader fr=new FileReader("Account.txt");
        BufferedReader br=new BufferedReader(fr);
        String line=null;
        Boolean status=false;
        //double sum=0;

        while((line=br.readLine())!=null){
            String[] vardata=line.split("\\|");
            if(id.equals(vardata[0])){
                System.out.println(line);
            }
        }
        //System.out.println("Total paid:"+sum);
        br.close();
        fr.close();  
    }

    public void payBill(String id)throws Exception{
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Amount you'd Pay:");
        double amount=sc.nextDouble();
        LocalDate localDate = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MMMM dd, yyyy");
        String date=localDate.format(formatter);;
        String desc="Amount paid";
        Accounts ac1=new Accounts(id, -amount, date, desc);
        FileWriter fw=new FileWriter("Account.txt",true);
        BufferedWriter bw=new BufferedWriter(fw);
        bw.write(ac1.toString());
        bw.newLine();
        bw.close();
        fw.close();
        System.out.println("Paid Sucessfully");
    }

    

}