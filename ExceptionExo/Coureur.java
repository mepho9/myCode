package ExceptionExo;

import java.util.Random;

public class Coureur extends Sportif{

    private int vitesseMoyenne;
    private int poid;
    Coureur(String prenom, String nom, int dateNaissance,Localisation localisationPerso) {
        super(prenom, nom, dateNaissance,localisationPerso);
    }

    @Override
    public int performer() {
        Random random = new Random();
        vitesseMoyenne=random.nextInt(8,14);
        poid=random.nextInt(60,201);
        return (vitesseMoyenne/poid)*(random.nextInt(110,131));
    }

}
