import "./CompanyDisplay.css";
import ReviceLogo from "../../images/Revice-Logo.svg";

function CompanyDisplay() {
  return (
    <>
      <h3 className="h3-headline">Unsere Partner</h3>
      <div className="CompanyDisplay-Wrapper">
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
        <img className="CompanyDisplayItem" src={ReviceLogo} alt="" />
      </div>
    </>
  );
}

export default CompanyDisplay;
