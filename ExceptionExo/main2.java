package ExceptionExo;

import java.util.Scanner;

public class main2 {
    public static void main(String[] args) throws Exception {
        Judoka aInscrire = new Judoka("Ruf","ruf",1995,Localisation.REGIONAL);
        Judoka aInscrire2 = new Judoka("tttt","tttt",1932,Localisation.NATIONAL);
        Judoka aInscrire3 = new Judoka("ffff","ffff",1931,Localisation.NATIONAL);

        Localisation localisation;

        Scanner sc = new Scanner(System.in);
        System.out.println("Selectionnez votre région :" +
                "\n- REGIONAL" +
                "\n- NATIONAL" +
                "\n- INTERNATIONNALE");

        String diff = sc.nextLine();

        Competition<Judoka> competition = new Competition<>(Localisation.valueOf(diff));

        for(Judoka jud : competition.getTheList()){
            System.out.println(jud);
        }
        competition.getTheList();
        competition.inscrire(aInscrire);
        competition.inscrire(aInscrire2);

        competition.inscrire(aInscrire3);

        competition.lancer();
        competition.getGagnant();
        //System.out.println(competition.getGagnant().getLocalisationPerso());


        //System.out.println(competition.getTheList());


        //System.out.println(Localisation.valueOf(diff).getPrix());


    }
}
