import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Price from "./Price/Price";
import "./PricingTable.css";

function PricingTable() {
  const [period, setPeriod] = useState(true);

  const standardMonth = {
    name: "Basic",
    price: "1",
    description: "Ab dem 13. Monat nur 1,99 €",
    included: [
      "Aktueller Status",
      "Leichte Kundenkommunikation",
      "Basic Support",
    ],
    notIncluded: [""],
  };

  const standardYear = {
    name: "Basic",
    price: "10",
    description: "Ab dem 13. Monat nur 20,00 €",
    included: [
      "Aktueller Status",
      "Leichte Kundenkommunikation",
      "Basic Support",
    ],
  };

  const mediumMonth = {
    name: "Premium",
    price: "2,99",
    description: "Ab dem 13. Monat nur 4,99 €",
    included: ["Aktueller Status", "Digitale Speisekarte", "Schneller Support"],
  };

  const mediumYear = {
    name: "Premium",
    price: "30",
    description: "Ab dem 13. Monat nur 50,00 €",
    included: ["Aktueller Status", "Digitale Speisekarte", "Schneller Support"],
  };

  const premiumMonth = {
    name: "Diamond",
    price: "4,99",
    description: "Ab dem 13. Monat nur 7,99 €",
    included: [
      "Aktueller Status",
      "Speisekarte",
      "Reservierungen",
      "Digitale Stempelkarte",
      "24 / 7 Support Chat",
    ],
  };

  const premiumYear = {
    name: "Diamond",
    price: "45",
    description: "Ab dem 13. Monat nur 80,00 €",
    included: [
      "Aktueller Status",
      "Speisekarte",
      "Reservierungen",
      "Digitale Stempelkarte",
      "24 / 7 Support Chat",
    ],
  };

  return (
    <>
      <section className="Pricing" id="Preise">
        <div className="Custom-Headline-Wrapper-Pricing">
          <h3 className="Custom-Headline-Hero">
            Unsere <span className="ServiceHero">Preisgestaltung</span>
          </h3>
          <div className="Pricing-Switch">
            Jahr
            <Switch checked={period} onClick={() => setPeriod(!period)} />
            Monat
          </div>
        </div>
        <div className="Pricing-Prices-Wrapper">
          <Price
            content={period ? standardMonth : standardYear}
            period={period}
          />
          <Price content={period ? mediumMonth : mediumYear} period={period} />
          <Price
            content={period ? premiumMonth : premiumYear}
            period={period}
          />
        </div>
      </section>
    </>
  );
}

export default PricingTable;
