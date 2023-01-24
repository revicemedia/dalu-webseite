import AccordionComponent from "../components/AccordionComponent/AccordionComponent";
// import CompanyDisplay from "../components/CompanyDisplay/CompanyDisplay";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import ServicesOverview from "../components/ServicesOverview/ServicesOverview";
// import TextHeadline from "../components/TextHeadline/TextHeadline";
import "./index.css";
import PricingTable from "../components/PricingTable/PricingTable";
import ContactImage from "../images/icons/mail.svg";
import Footer from "../components/Footer/Footer";

function Index() {
  return (
    <>
      <Navbar />
      <section className="first-section">
        <HeroSection />
        <ServicesOverview />
        {/* <TextHeadline /> */}
        <InfoSection />
        <PricingTable />
        {/* <CompanyDisplay /> */}
        <AccordionComponent />
        <div className="BottomPlaceholder"></div>
      </section>
      <a
        href="mailto:hey@dalu-services.com"
        target="_blank"
        className="Kontakt-Icon-Wrapper"
        rel="noreferrer"
      >
        <div className="Test12345"></div>
        <img className="IconContact" src={ContactImage} alt="Kontakt" />
      </a>
      <Footer />
    </>
  );
}

export default Index;
