package ExceptionExo;

public enum Localisation {

    REGIONAL(1000,25),
    NATIONAL(10_000,50),
    INTERNATIONNALE(100_000,100);

    private int myLevel;
    private int prix ;
    private int nbrParticipant;
    Localisation(int prix, int nbrParticipant) {
        this.prix = prix;
        this.nbrParticipant=nbrParticipant;
    }

    public int getPrix() {
        return prix;
    }

    public int getNbrParticipant() {
        return nbrParticipant;
    }
}
