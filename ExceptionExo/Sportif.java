package ExceptionExo;

import java.util.Date;
import java.util.Random;

public abstract class Sportif {
    private String prenom ;
    private String nom ;
    private int dateNaissance;

    private Localisation localisationPerso;
    private int totalGain;
    private Resultat perf = new Resultat();

    public Sportif(String prenom, String nom, int dateNaissance,Localisation localisationPerso) {
        this.prenom=prenom;
        this.nom = nom;
        this.dateNaissance=dateNaissance;
        this.localisationPerso=localisationPerso;
    }

    public int getTotalGain(){
        return this.totalGain;
    }
    public void setLocalisationPerso(Localisation localisation){

        if(localisation.equals(Localisation.REGIONAL)){
            this.localisationPerso= Localisation.NATIONAL;
        }
        else if (localisation.equals(Localisation.NATIONAL)) {
            this.localisationPerso=Localisation.INTERNATIONNALE;
        }
    }

    public Localisation getLocalisationPerso() {
        return localisationPerso;
    }

    public String getPrenom() {
        return prenom;
    }

    public String getNom() {
        return nom;
    }

    public int getDateNaissance() {
        return dateNaissance;
    }

    public Resultat getPerf() {
        return perf;
    }

    public void setTotalGain(int newGain){
        this.totalGain= newGain;
    }
    public abstract int performer();


    public Resultat getperformance(){
        return perf;
    }

    @Override
    public String toString() {
        return this.prenom + " " + this.nom + " "+this.dateNaissance+ " " +this.perf.getPerformance() ;
    }
}
