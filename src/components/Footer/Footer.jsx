import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import { mdiInstagram } from "@mdi/js";
import "./Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <div className="InnerFooter">
        <div className="FooterSection">
          <h3 className="WHITE-WHITEHEADLINE">Kontakt</h3>
          <p className="WHITE">DaLu Services GbR</p>
          <p className="WHITE">Am Ringofen 8</p>
          <p className="WHITE">56566 Neuwied</p>
          <br />
          <p className="WHITE Name-Headline">Gesetzliche Vertreter:</p>
          <p className="WHITE">Danny Kowalczuk</p>
          <p className="WHITE">Luca Torres Neuer</p>
          <p className="WHITE">Fabian Hanso</p>
          <br />
          <a
            href="mailto:hey@dalu-services.com"
            target="_blank"
            className="WHITE-Link Blue-Link"
            rel="noreferrer"
          >
            hey@dalu-services.com
          </a>
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
          <a href="/" target="_blank" className="WHITE-Link" rel="noreferrer">
            Allgemeine Geschäftsbedingungen
          </a>
          <a href="/" target="_blank" className="WHITE-Link" rel="noreferrer">
            Nutzungsbedingungen
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
      <div className="IconFooter">
        <a
          href="https://www.linkedin.com/company/dalu-services/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon path={mdiLinkedin} size={1} />
        </a>
        <a
          href="https://www.instagram.com/dalu_services/"
          target="_blank"
          rel="noreferrer"
        >
          <Icon path={mdiInstagram} size={1} />
        </a>
      </div>
      <div className="CopyrightFooter">
        <p className="CopyrightParagraph">© 2023 DaLu Services GbR</p>
      </div>
    </section>
  );
}

export default Footer;
