import React from "react";
import "./Price.css";
import CheckIcon from "../../../images/icons/check-two.svg";

function Price({ content, period }) {
  return (
    <section className="Price">
      <p className="Price-Naming">{content.name}</p>
      <p className="Price-Price">
        {content.price + " €"}
        {period ? (
          <span className="Price-Price-small">/ Monat</span>
        ) : (
          <span className="Price-Price-small">/ Jahr</span>
        )}
      </p>
      <p className="Price-Naming">{content.description}</p>
      <div className="Price-Liste">
        {content.included.map((inclu, index) => (
          <div className="Price-Included" key={index}>
            <img
              src={CheckIcon}
              alt="Included Services"
              className="Price-CheckIcon"
            />
            <p>{inclu}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Price;
