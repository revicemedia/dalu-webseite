import AccordionComponent from "../components/AccordionComponent/AccordionComponent";
import CompanyDisplay from "../components/CompanyDisplay/CompanyDisplay";
import HeroSection from "../components/HeroSection/HeroSection";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import ServicesOverview from "../components/ServicesOverview/ServicesOverview";
import TextHeadline from "../components/TextHeadline/TextHeadline";
import "./index.css";

function Index() {
  return (
    <>
      <Navbar />
      <section className="first-section">
        <HeroSection />
        <ServicesOverview />
        <TextHeadline />
        <CompanyDisplay />
        <InfoSection />
        <AccordionComponent />
        <div className="BOOOODY"></div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

export default Index;
