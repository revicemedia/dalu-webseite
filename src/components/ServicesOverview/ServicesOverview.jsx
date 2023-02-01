import "./ServicesOverview.css";
import Service from "./Service/Service";

function ServicesOverview() {
  return (
    <section id="Services" className="Services">
      <h3 className="Custom-Headline-Hero">
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
          statusOfComponent="Release 1.0"
          description="Preise in Echtzeit anpassen und neue Produkte hinzufügen."
          status="done"
        />
        <Service
          icon="buy"
          headline="Reservierung von Tischen erleichtern"
          statusOfComponent="Wird implementiert"
          description="Tische reservieren, ohne Arbeitszeit zu beanspruchen."
          status="coming"
        />
        <Service
          icon="collect"
          headline="Stempelkarte für Stammkunden"
          statusOfComponent="Wird implementiert"
          description="Belohne deine Kunden für ihre Treue. Digital und unkompliziert."
          status="coming"
        />
        <Service
          icon="chat"
          headline="Vereinfachte Kommunikation"
          statusOfComponent="Wird implementiert"
          description="Kommuniziere über unser Tool ganz einfach mit deinen Kunden."
          status="coming"
        />
        <Service
          icon="favorite"
          headline="Kundenfeedback auf direktem Weg"
          statusOfComponent="Wird implementiert"
          description="Bei uns können Kunden das Erlebnis bei dir bewerten."
          status="coming"
        />
      </div>
    </section>
  );
}

export default ServicesOverview;
