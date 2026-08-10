import java.io.*;
import java.util.*;

class Developer {

    String id, name, department, role;
    String assignment, dueDate, status;

    int reports, tickets, calls;

    int hoursWorked;
    double taskDuration;

    double errorRate;
    String feedback;
    double reviewScore;

    int presence, lateness, meetings;

    Developer(String id, String name, String department, String role,
            String assignment, String dueDate, String status,
            int reports, int tickets, int calls,
            int hoursWorked, double taskDuration,
            double errorRate, String feedback, double reviewScore,
            int presence, int lateness, int meetings) {

        this.id = id;
        this.name = name;
        this.department = department;
        this.role = role;

        this.assignment = assignment;
        this.dueDate = dueDate;
        this.status = status;

        this.reports = reports;
        this.tickets = tickets;
        this.calls = calls;

        this.hoursWorked = hoursWorked;
        this.taskDuration = taskDuration;

        this.errorRate = errorRate;
        this.feedback = feedback;
        this.reviewScore = reviewScore;

        this.presence = presence;
        this.lateness = lateness;
        this.meetings = meetings;
    }

    public String toString() {
        return id + " | " + name + " | " + department + " | " + role +
                " | Score:" + reviewScore + " | Hours:" + hoursWorked;
    }
}

class ActivityStack {

    String stack[] = new String[100];
    int top = -1;

    void push(String action) {
        stack[++top] = action;
    }

    void display() {

        if (top == -1) {
            System.out.println("No activity.");
            return;
        }

        for (int i = top; i >= 0; i--)
            System.out.println(stack[i]);
    }
}

class TaskQueue {

    Queue<String> queue = new LinkedList<>();

    void addTask(String task) {
        queue.add(task);
    }

    void showTasks() {

        if (queue.isEmpty()) {
            System.out.println("No pending tasks.");
            return;
        }

        for (String t : queue)
            System.out.println(t);
    }
}

class MaxHeap {

    PriorityQueue<Developer> heap = new PriorityQueue<>((a, b) -> Double.compare(b.reviewScore, a.reviewScore));

    void insert(Developer d) {
        heap.add(d);
    }

    void showTop() {

        if (heap.isEmpty()) {
            System.out.println("No data.");
            return;
        }

        PriorityQueue<Developer> temp = new PriorityQueue<>(heap);

        System.out.println("Top Performers:");

        while (!temp.isEmpty())
            System.out.println(temp.poll());
    }
}

public class DevManagementSystem {

    static ArrayList<Developer> devList = new ArrayList<>();
    static ActivityStack log = new ActivityStack();
    static TaskQueue taskQueue = new TaskQueue();
    static MaxHeap heap = new MaxHeap();

    static final String USER_FILE = "users.txt";

    static void signup(Scanner sc) {

        try {
            System.out.print("Create Username: ");
            String u = sc.next();

            System.out.print("Create Password: ");
            String p = sc.next();

            FileWriter fw = new FileWriter(USER_FILE, true);
            fw.write(u + "," + p + "\n");
            fw.close();

            System.out.println("Signup Successful.");
        } catch (Exception e) {
            System.out.println("Error saving user.");
        }
    }

    static boolean login(Scanner sc) {

        System.out.print("Username: ");
        String u = sc.next();

        System.out.print("Password: ");
        String p = sc.next();

        try {

            BufferedReader br = new BufferedReader(new FileReader(USER_FILE));
            String line;

            while ((line = br.readLine()) != null) {

                String data[] = line.split(",");

                if (data[0].equals(u) && data[1].equals(p)) {
                    br.close();
                    return true;
                }
            }

            br.close();
        } catch (Exception e) {
            System.out.println("User file not found.");
        }

        return false;
    }

    static void addDeveloper(Scanner sc) {

        System.out.print("ID: ");
        String id = sc.next();
        System.out.print("Name: ");
        String name = sc.next();
        System.out.print("Department: ");
        String dept = sc.next();
        System.out.print("Role: ");
        String role = sc.next();

        System.out.print("Assignment: ");
        String assign = sc.next();
        System.out.print("Due Date: ");
        String due = sc.next();
        System.out.print("Status: ");
        String status = sc.next();

        System.out.print("Reports: ");
        int reports = sc.nextInt();
        System.out.print("Tickets: ");
        int tickets = sc.nextInt();
        System.out.print("Calls: ");
        int calls = sc.nextInt();

        System.out.print("Hours Worked: ");
        int hours = sc.nextInt();
        System.out.print("Task Duration: ");
        double dur = sc.nextDouble();

        System.out.print("Error Rate: ");
        double err = sc.nextDouble();
        System.out.print("Feedback: ");
        String fb = sc.next();
        System.out.print("Review Score: ");
        double score = sc.nextDouble();

        System.out.print("Presence %: ");
        int pres = sc.nextInt();
        System.out.print("Lateness: ");
        int late = sc.nextInt();
        System.out.print("Meetings: ");
        int meet = sc.nextInt();

        Developer d = new Developer(id, name, dept, role,
                assign, due, status,
                reports, tickets, calls,
                hours, dur,
                err, fb, score,
                pres, late, meet);

        devList.add(d);
        heap.insert(d);
        log.push("Added developer " + name);

        System.out.println("Developer added.");
    }

    static void deleteDeveloper(Scanner sc) {

        System.out.print("Enter ID to delete: ");
        String id = sc.next();

        devList.removeIf(d -> d.id.equals(id));

        log.push("Deleted developer " + id);

        System.out.println("Developer removed.");
    }

    static void displayDevelopers() {

        for (Developer d : devList)
            System.out.println(d);
    }

    static void selectionSort() {

        for (int i = 0; i < devList.size() - 1; i++) {

            int max = i;

            for (int j = i + 1; j < devList.size(); j++)
                if (devList.get(j).reviewScore > devList.get(max).reviewScore)
                    max = j;

            Collections.swap(devList, i, max);
        }

        System.out.println("Sorted by Review Score.");
    }

    static void insertionSort() {

        for (int i = 1; i < devList.size(); i++) {

            Developer key = devList.get(i);
            int j = i - 1;

            while (j >= 0 && devList.get(j).hoursWorked > key.hoursWorked) {
                devList.set(j + 1, devList.get(j));
                j--;
            }

            devList.set(j + 1, key);
        }

        System.out.println("Sorted by Hours Worked.");
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        Developer d1 = new Developer("201", "Praveen", "Backend", "JavaDev", "PaymentAPI", "10-05", "InProgress", 6, 14,
                3, 42, 2.4, 1.1, "Good", 8.8, 96, 1, 9);
        Developer d2 = new Developer("202", "Abhay", "Frontend", "ReactDev", "DashboardUI", "12-05", "Pending", 4, 11,
                2, 36, 2.9, 2.0, "Average", 7.4, 91, 2, 7);
        Developer d3 = new Developer("203", "Jahnavi", "Data", "DataAnalyst", "SalesReport", "15-05", "Running", 7, 10,
                1, 39, 2.2, 0.8, "Excellent", 9.3, 97, 0, 10);
        Developer d4 = new Developer("204", "Sunny", "DevOps", "CloudEngineer", "ServerSetup", "18-05", "Started", 3, 8,
                1, 37, 2.7, 1.6, "Good", 8.0, 93, 1, 8);
        Developer d5 = new Developer("205", "Bhargav", "AI", "MLEngineer", "ModelTraining", "20-05", "InProgress", 5,
                13, 2, 44, 2.0, 0.9, "Excellent", 9.1, 95, 1, 9);

        devList.add(d1);
        devList.add(d2);
        devList.add(d3);
        devList.add(d4);
        devList.add(d5);

        heap.insert(d1);
        heap.insert(d2);
        heap.insert(d3);
        heap.insert(d4);
        heap.insert(d5);

        log.push("System loaded with default developers");
        System.out.println("\n");
        System.out.println("******* Welcome to DevTrack *******");
        System.out.println("1 Signup");
        System.out.println("2 Login");
        System.out.print("Enter your Option: ");

        int ch = sc.nextInt();

        if (ch == 1)
            signup(sc);

        if (!login(sc)) {
            System.out.println("Login failed.");
            return;
        }

        while (true) {

            System.out.println("\n===== MENU =====");
            System.out.println("1 Add Developer");
            System.out.println("2 Delete Developer");
            System.out.println("3 Display Developers");
            System.out.println("4 Selection Sort by Review Score");
            System.out.println("5 Insertion Sort by Hours Worked");
            System.out.println("6 Activity Log (Stack)");
            System.out.println("7 Task Queue");
            System.out.println("8 Top Performers (Max Heap)");
            System.out.println("9 Exit");
            System.out.println("\n");
            System.out.print("Select an Option: ");

            int op = sc.nextInt();

            switch (op) {

                case 1:
                    System.out.println("\n[Option 1 Selected: Add Developer]");
                    addDeveloper(sc);
                    break;

                case 2:
                    System.out.println("\n[Option 2 Selected: Delete Developer]");
                    deleteDeveloper(sc);
                    break;

                case 3:
                    System.out.println("\n[Option 3 Selected: Display Developers]");
                    if (devList.isEmpty())
                        System.out.println("No developers available.");
                    else
                        displayDevelopers();
                    break;

                case 4:
                    System.out.println("\n[Option 4 Selected: Selection Sort by Review Score]");
                    if (devList.isEmpty())
                        System.out.println("No developers to sort.");
                    else {
                        selectionSort();
                        displayDevelopers();
                    }
                    break;

                case 5:
                    System.out.println("\n[Option 5 Selected: Insertion Sort by Hours Worked]");
                    if (devList.isEmpty())
                        System.out.println("No developers to sort.");
                    else {
                        insertionSort();
                        displayDevelopers();
                    }
                    break;

                case 6:
                    System.out.println("\n[Option 6 Selected: Activity Log (Stack)]");
                    log.display();
                    break;

                case 7:
                    System.out.println("\n[Option 7 Selected: Task Queue]");
                    System.out.print("Enter task: ");
                    String t = sc.next();
                    taskQueue.addTask(t);
                    System.out.println("Current Tasks in Queue:");
                    taskQueue.showTasks();
                    break;

                case 8:
                    System.out.println("\n[Option 8 Selected: Top Performers (Max Heap)]");
                    heap.showTop();
                    break;

                case 9:
                    System.out.println("\nExiting DevTrack System...");
                    return;

                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }
}