package ExceptionExo;

import ExceptionExo.exceptions.EtatCompetitionException;
import ExceptionExo.exceptions.LimiteAtteinteException;

import java.util.*;

public class Competition<S extends Sportif> {
    private int limiteParticipant;
    private boolean launched = false;
    private ArrayList<S> theList = new ArrayList<>();

    Localisation localisation;

    public void lancer() throws Exception{
        if(this.isFinished()){
            throw new EtatCompetitionException(launched,false);
        }
        else if (this.theList.size()<1) {
            throw new IllegalStateException("La compet na pas de participant");
        }
        else{
            for (int i = 0 ; i < this.theList.size();i++){
                this.theList.get(i).performer();

            }

            this.setLaunch(true);
            this.displaySort();

        }
    }

    public void displaySort(){
        ArrayList<Integer> numPart = new ArrayList<>();
        for (int i = 0 ; i<this.theList.size();i++){
            numPart.add(this.theList.get(i).getperformance().getPerformance());
            Collections.sort(numPart);
            Collections.reverse(numPart);
        }
        System.out.println(numPart);
    }
    public void setLaunch(boolean newState){
        this.launched=newState;
    }

    public Competition(Localisation localisation) {
        this.localisation = localisation;
        this.limiteParticipant=localisation.getNbrParticipant();
    }

    public void inscrire(S aSportif) throws Exception{
        if(this.isFinished()){

            //throw new IllegalStateException("La compétition est terminée");
            throw new EtatCompetitionException(launched,false);

        }
        else if(this.theList.size() >= this.limiteParticipant){
            throw new LimiteAtteinteException(this.limiteParticipant);
        }
        else if (this.theList.contains(aSportif)) {
            throw new IllegalArgumentException("Ce sportif est déjà dans la compétition");
        }
        else{
            if(aSportif.getLocalisationPerso().equals(localisation)){
                this.theList.add(aSportif);
            }

        }


    }

    public void desinscrire(S aSportif) throws Exception{
        if(!this.theList.contains(aSportif)){
            throw new IllegalArgumentException("sportif non inscrit");
        }
        else if (isFinished()) {
            throw new EtatCompetitionException(launched,false);
        }
        else{
            this.theList.remove(aSportif);
        }
    }

    public S getGagnant() throws Exception{
        if(!isFinished()){
            throw new Exception("Compétition pas terminée");
        }
        else{
            int bestPerf = 0;
            int position = 0;
            for(int i = 0; i <this.theList.size();i++){
                if(bestPerf<this.theList.get(i).getperformance().getPerformance() && this.theList.get(i).getperformance().getPerformance()!=0){
                    bestPerf= this.theList.get(i).getperformance().getPerformance();
                    position=i;
                }
            }
            this.theList.get(position).setLocalisationPerso(localisation);
            displayWinnerEarnings(this.theList.get(position));
//            System.out.println(this.theList.get(position).getLocalisationPerso());
            return this.theList.get(position);
        }

    }
    public void displayWinnerEarnings(S winner){
        System.out.println(winner.getPrenom() + " " + winner.getNom()+" a gagné : "+localisation.getPrix()+" euro en "+localisation);
        System.out.println("Le joueur :"+ winner.getPrenom() + " passe en  "+winner.getLocalisationPerso());
    }

    public boolean isFinished(){
        return this.launched;
    }

    public int getLimiteParticipant(){
        return this.limiteParticipant;
    }
    public ArrayList<S> getTheList(){
        return theList;
    }
}
