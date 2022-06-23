//package ExceptionExo;
//
//import java.util.ArrayList;
//import java.util.Scanner;
//
//public class main {
//    public static void main(String[] args) throws Exception {
//    int whichType ;
//    String name ;
//    String prenom;
//    int date;
//    Scanner sc = new Scanner(System.in);
//    boolean keepGoing = false;
//    int choice;
//    int playerToRemove;
//
//    Competition<Judoka> competition = new Competition<>();
//
//    Judoka jud ;
//    Coureur cour;
//    LanceurJavelot jav;
//
//    while(!keepGoing){
//        choice=0;
//        playerToRemove=0;
//        System.out.println(competition.getTheList());
//        System.out.println("Lancer / (1) \nInscrire / (2) " +
//                "\nDesinscrire / (3) \nLe gagnant / (4)\nQuitter / (5)");
//
//        choice = Integer.parseInt(sc.nextLine());
//        switch (choice){
//            case 1:
//                try{
//                    competition.lancer();
//                }catch(Exception e){
//
//                    System.out.println(e.getMessage());
//                }
//
//                break;
//            case 2:
//                prenom=initPrenom(sc);
//                name=initNom(sc);
//                date=initDate(sc);
//                whichType=initType(sc);
//                try{
//
//                    Sportif aInscrire =null ;
//                    switch (whichType){
//                        case 1:
//                            aInscrire = new Judoka(prenom,name,date);
//                            break;
//                        case 2:
//                            aInscrire = new Coureur(prenom,name,date);
//                            break;
//                        case 3:
//                            aInscrire = new LanceurJavelot(prenom,name,date);
//                            break;
//                    }
//                    //competition.inscrire(aInscrire);
//
//
//                }
//                catch (Exception e){
//                    System.out.println(e.getMessage());
//                }
//
//                break;
//            case 3:
//                System.out.println(competition.getTheList());
//
//                System.out.println("Which to remove ? / (1) (2) (3) etc..");
//                playerToRemove= Integer.parseInt(sc.nextLine());
//                try{
//                    competition.desinscrire(competition.getTheList().get(playerToRemove-1));
//                }
//                catch (Exception e){
//                    System.out.println(e.getMessage());
//                }
//                break;
//            case 4:
//                try{
//                    System.out.println(competition.getGagnant());
//                }
//                catch (Exception e){
//                    System.out.println(e.getMessage());
//                }
//                break;
//            case 5:
//                keepGoing=true;
//                break;
//        }
//    }
//    System.out.println("");
//
//
//
//
//
//
//
//
//
//    }
//
//    public static String initPrenom(Scanner scanner){
//        System.out.println("Prenom");
//        String prenomSportif = scanner.nextLine();
//        return prenomSportif;
//    }
//
//    public static String initNom(Scanner scanner){
//        System.out.println("Nom ");
//        String nomSportif = scanner.nextLine();
//        return nomSportif;
//    }
//
//    public static int initDate(Scanner scanner){
//        System.out.println("Date / 1995 etc..");
//        int dateSportif = Integer.parseInt(scanner.nextLine());
//        return dateSportif;
//    }
//    public static int initType(Scanner scanner){
//        System.out.println("Judoko / (1) \nCoureur / (2)\nLanceur Javelot / (3)");
//        int leType = Integer.parseInt(scanner.nextLine());
//        return leType;
//    }
//}
//
