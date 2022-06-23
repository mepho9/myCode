package ExceptionExo.exceptions;

import java.nio.channels.IllegalSelectorException;

public class EtatCompetitionException extends IllegalStateException {
    private final boolean etatCourant;
    private final boolean etatAttendu;

    public EtatCompetitionException(boolean etatCourant, boolean etatAttendu) {
        super("La compétition est" + (etatCourant ? "" : "non " )+ "termineé. Pour faire cette action" + "elle devrait être" + (etatAttendu ? "":"non ") + "terminée.");
        this.etatCourant = etatCourant;
        this.etatAttendu = etatAttendu;
    }

    public boolean isEtatCourant() {
        return etatCourant;
    }

    public boolean isEtatAttendu() {
        return etatAttendu;
    }
}
