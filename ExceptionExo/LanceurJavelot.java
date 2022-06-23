package ExceptionExo;

import java.util.Random;

public class LanceurJavelot extends Sportif{
    private int force;
    private int anneeExp;
    LanceurJavelot(String prenom, String nom, int dateNaissance,Localisation localisationPerso) {
        super(prenom, nom, dateNaissance,localisationPerso);
    }

    @Override
    public int performer() {
        Random random= new Random();
        force=random.nextInt(30,51);
        anneeExp=random.nextInt(0,21);
        return force+anneeExp*(random.nextInt(70,90));
    }
}
