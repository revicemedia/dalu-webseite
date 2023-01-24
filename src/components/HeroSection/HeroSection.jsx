import "./HeroSection.css";
import DaLuMobileImage from "../../images/test.png";
import BlobbImage from "../../images/blob.svg";

function HeroSection() {
  return (
    <section className="Hero-Wrapper">
      <div className="Hero-Site">
        <h2 className="HeroHeadline">
          Binde deine <span className="CustomerHero">Kunden</span> noch
          effektiver an dein <span className="CustomerHero">Unternehmen</span>.
        </h2>
        <p className="HeroParagraph">
          Mithilfe unserer weitreichenden Services bindest du deine Kunden
          effektiver denn je zuvor!
        </p>
        <a href="#Services" className="HeroLink">
          Mehr erfahren
        </a>
      </div>
      <div className="Hero-Site-2 flex-center">
        <img className="DaLuHeroImage" src={BlobbImage} alt="" />
        <img className="DaLuHeroImage" src={DaLuMobileImage} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
