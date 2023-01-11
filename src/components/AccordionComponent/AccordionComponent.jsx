import { useState } from "react";
import "./AccordionComponent.css";

function AccordionComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (key) => {
    if (activeTab !== key) {
      setActiveTab(key);
    } else {
      setActiveTab(0);
    }
  };

  return (
    <>
      <button
        className={activeTab === 1 ? "accordion active" : "accordion"}
        onClick={() => handleActiveTab(1)}
      >
        Section 1
      </button>
      {activeTab === 1 && (
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}

      <button
        className={activeTab === 2 ? "accordion active" : "accordion"}
        onClick={() => handleActiveTab(2)}
      >
        Section 2
      </button>
      {activeTab === 2 && (
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}

      <button
        className={activeTab === 3 ? "accordion active" : "accordion"}
        onClick={() => handleActiveTab(3)}
      >
        Section 3
      </button>
      {activeTab === 3 && (
        <div className="panel">
          <p>Lorem ipsum...</p>
        </div>
      )}
    </>
  );
}

export default AccordionComponent;
