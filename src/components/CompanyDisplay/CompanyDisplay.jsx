import "./CompanyDisplay.css";
import ReviceLogo from "../../images/Revice-Logo.svg";

function CompanyDisplay() {
  return (
    <section className="Company-Overview">
      <h3>
        Unsere <span className="ServiceHero">Partner</span>
      </h3>
      <div className="CompanyDisplay-Wrapper">
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
      </div>
    </section>
  );
}

export default CompanyDisplay;
