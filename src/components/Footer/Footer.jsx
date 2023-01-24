import "./Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <div className="InnerFooter">
        <div className="FooterSection">
          <h3 className="WHITE-WHITEHEADLINE">Kontakt</h3>
          <p className="WHITE">DaLu Services GbR</p>
          <p className="WHITE">Gesetzliche Vertreter:</p>
          <p className="WHITE">Danny Kowalczuk, Luca Torres Neuer</p>
          <p className="WHITE"></p>
        </div>
        <div className="FooterSection">
          <h3 className="WHITE-WHITEHEADLINE">Links</h3>
          <a
            href="https://ec.europa.eu/consumers/odr/main/?event=main.complaints.screeningphase"
            target="_blank"
            className="WHITE-Link"
            rel="noreferrer"
          >
            Datenschutzvereinbarung
          </a>
          <a
            href="https://ec.europa.eu/consumers/odr/main/?event=main.complaints.screeningphase"
            target="_blank"
            className="WHITE-Link"
            rel="noreferrer"
          >
            Allgemeine Geschäftsbedingungen
          </a>
          <a
            href="https://ec.europa.eu/consumers/odr/main/?event=main.complaints.screeningphase"
            target="_blank"
            className="WHITE-Link"
            rel="noreferrer"
          >
            Online-Streitbeilegung
          </a>
        </div>
        <div className="FooterSection">
          <h3 className="WHITE-WHITEHEADLINE">Produkte</h3>
          <p className="WHITE">- Auslastung von Locations</p>
          <p className="WHITE">- Digitale Speisekarte</p>
          <p className="WHITE">- Reservierung von Tischen</p>
          <p className="WHITE">- Digitale Stempelkarte</p>
          <p className="WHITE">- Kundenkommunikation</p>
          <p className="WHITE">- Feedback von Kunden</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
