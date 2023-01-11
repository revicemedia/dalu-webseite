import "./ServicesOverview.css";
import Service from "./Service/Service";

function ServicesOverview() {
  return (
    <>
      <h3 className="">
        Unsere <span className="ServiceHero">Leistungen</span>
      </h3>
      <div className="ServicesOverview-Wrapper">
        <Service
          icon="explore"
          headline="Auslastung deiner Location teilen"
          statusOfComponent="Release 1.0"
          description="Teile potenziellen Kunden mit, wie sehr deine Location ausgelastet ist."
          status="done"
        />
        <Service
          icon="restaurant"
          headline="Digitale Speisekarte für deine Location"
          statusOfComponent="Wird implementiert"
          description="Teile potenziellen Kunden mit, wie sehr deine Location ausgelastet ist."
          status="coming"
        />
        <Service
          icon="buy"
          headline="Reservierung von Tischen erleichtern"
          statusOfComponent="Wird implementiert"
          description="Teile potenziellen Kunden mit, wie sehr deine Location ausgelastet ist."
          status="coming"
        />
        <Service
          icon="collect"
          headline="Stempelkarte für Stammkunden"
          statusOfComponent="Wird implementiert"
          description="Teile potenziellen Kunden mit, wie sehr deine Location ausgelastet ist."
          status="coming"
        />
        <Service
          icon="chat"
          headline="Vereinfachte Kommunikation"
          statusOfComponent="Release 1.0"
          description="Teile potenziellen Kunden mit, wie sehr deine Location ausgelastet ist."
          status="done"
        />
        <Service
          icon="favorite"
          headline="Kundenfeedback auf direktem Weg"
          statusOfComponent="Wird implementiert"
          description="Teile potenziellen Kunden mit, wie sehr deine Location ausgelastet ist."
          status="coming"
        />
      </div>
    </>
  );
}

export default ServicesOverview;
