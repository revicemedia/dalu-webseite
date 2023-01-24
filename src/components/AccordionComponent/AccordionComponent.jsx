import { useState } from "react";
import "./AccordionComponent.css";

function AccordionComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (key) => {
    if (activeTab !== key) {
      setActiveTab(key);
    } else {
      setActiveTab(0);
    }
  };

  return (
    <section className="Accordion-Section">
      <h3 className="Custom-Headline-Hero">
        Unser <span className="ServiceHero">FAQ</span>
      </h3>
      <button
        className={activeTab === 1 ? "accordion active" : "accordion"}
        onClick={() => handleActiveTab(1)}
      >
        Kann ich mein Abonnement jederzeit kündigen?
      </button>
      {activeTab === 1 && (
        <div className="panel">
          <p className="Panel-Description">
            Die Mindestvertragslaufzeit beträgt 12 Monate. Solltest du dein
            Abonnement nicht weiterführen wollen, so kannst du dieses vor Ablauf
            des 12. Monats kündigen. Ab dem 2. Jahr kannst du jederzeit mit
            einer Kündigungsfrist von einem Monat kündigen. Kündigst du zum
            Beispiel am 6. Januar, so endet dein Vertrag am letzten Tag des
            Februars.
          </p>
        </div>
      )}

      <button
        className={activeTab === 2 ? "accordion active" : "accordion"}
        onClick={() => handleActiveTab(2)}
      >
        Status, Speisekarte und co. bearbeiten
      </button>
      {activeTab === 2 && (
        <div className="panel">
          <p className="Panel-Description">
            Wir haben uns als Ziel gesetzt, sämtliche Services in einem Tool zur
            Verfügung zu stellen. Dies wollen wir nicht nur für den Endnutzer,
            sondern auch für unsere Partner erzielen. Wenn du dich für dein
            Service-Modell entschieden hast, erhältst du Zugriff auf das
            Admin-Dashboard, welches Übersichtlich gestaltet und auf deine
            Services angepasst ist. Hast du zum Beispiel ein Paket mit einer
            Speisekarte und der Tischreservierung gebucht, so werden dir diese
            Bereiche angezeigt.
          </p>
        </div>
      )}

      <button
        className={activeTab === 3 ? "accordion active" : "accordion"}
        onClick={() => handleActiveTab(3)}
      >
        Section 3
      </button>
      {activeTab === 3 && (
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}
    </section>
  );
}

export default AccordionComponent;
