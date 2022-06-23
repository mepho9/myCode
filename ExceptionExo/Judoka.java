package ExceptionExo;

import java.util.Random;

public class Judoka extends Sportif{
    private int puissanceProjection;

    Judoka(String prenom, String nom, int dateNaissance, Localisation localisationPerso) {
        super(prenom, nom, dateNaissance, localisationPerso);
    }

    @Override
    public int performer() {
        Random random = new Random();
        puissanceProjection= random.nextInt(40,80+1);
        int moveExecution = random.nextInt(-20,20+1);
        this.getperformance().addPerformance(puissanceProjection+moveExecution);
        return this.getperformance().getPerformance();
    }
}
