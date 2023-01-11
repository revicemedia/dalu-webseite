import "./Service.css";
import Test from "../../../images/Revice-Logo.svg";
import { useState } from "react";
import Map from "../../../images/icons/map.svg";
import Favorite from "../../../images/icons/thumb.svg";
import Explore from "../../../images/icons/explore.svg";
import Restaurant from "../../../images/icons/restaurant.svg";
import Chat from "../../../images/icons/chat.svg";
import Buy from "../../../images/icons/buy.svg";
import Collect from "../../../images/icons/collect.svg";
import TaskIcon from "../../../images/icons/task.svg";
import ComingIcon from "../../../images/icons/update.svg";

function Service({ icon, headline, statusOfComponent, description, status }) {
  const [activeTab, setActiveTab] = useState(false);

  const handleMouse = () => {
    setActiveTab(true);
  };
  const handleMouseLeave = () => {
    setActiveTab(false);
  };

  return (
    <div
      className="Service"
      onMouseMove={() => handleMouse()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div>
        <img
          src={
            icon === "explore"
              ? Explore
              : icon === "map"
              ? Map
              : icon === "favorite"
              ? Favorite
              : icon === "restaurant"
              ? Restaurant
              : icon === "chat"
              ? Chat
              : icon === "buy"
              ? Buy
              : icon === "collect"
              ? Collect
              : Test
          }
          alt=""
          className={activeTab ? "Icon Icon--Active" : "Icon"}
        />
      </div>
      <div>
        <div
          className={
            status === "done"
              ? "StatusBadge Done"
              : status === "coming"
              ? "StatusBadge Coming"
              : "StatusBadge"
          }
        >
          <img
            className={
              status === "done" ? "Status_Image Coming" : "Status_Image"
            }
            src={status === "done" ? TaskIcon : ComingIcon}
            alt=""
          />
          <div>
            <div
              className={
                status === "done" ? "Status_Text" : "Status_Text Text_Coming"
              }
            >
              {statusOfComponent}
            </div>
          </div>
        </div>
        <h4 className="headline-h4">{headline}</h4>
        <p className={activeTab ? "PTag Active" : "PTag"}>{description}</p>
      </div>
    </div>
  );
}

export default Service;
