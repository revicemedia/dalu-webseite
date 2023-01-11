import "./InfoSection.css";
import WorldImage from "../../images/World.png";

function InfoSection() {
  return (
    <div className="InfoSection-Wrapper">
      <div className="InfoSectionImage">
        <img className="InfoSection--Image" src={WorldImage} alt="" />
      </div>
      <div className="InfoSectionTextSite">
        <h2 className="InfoSectionHeadline">
          Erreiche deine <span className="InfoSectionCustomer">Kunden</span>{" "}
          jederzeit und überall.
        </h2>
        <p className="InfoSectionParagraph">
          Deine Kunden können aus der ganzen Welt auf deine Informationen
          zugreifen, Tische reservieren und unvergessliche Stunden planen.
        </p>
      </div>
    </div>
  );
}

export default InfoSection;
