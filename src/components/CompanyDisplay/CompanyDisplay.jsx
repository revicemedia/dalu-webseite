import "./CompanyDisplay.css";
import DaLuMobileImage from "../../images/test.png";
import Logo1 from "../../images/DaLu-Logo.svg";
import ReviceLogo from "../../images/Revice-Logo.svg";

function CompanyDisplay() {
  return (
    <>
      <h3 className="h3-headline">Unsere Partner</h3>
      <div className="CompanyDisplay-Wrapper">
        <img className="CompanyDisplayItem" src={ReviceLogo} />
        <img className="CompanyDisplayItem" src={ReviceLogo} />
        <img className="CompanyDisplayItem" src={ReviceLogo} />
        <img className="CompanyDisplayItem" src={ReviceLogo} />
        <img className="CompanyDisplayItem" src={ReviceLogo} />
      </div>
    </>
  );
}

export default CompanyDisplay;
