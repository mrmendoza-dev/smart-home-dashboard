import { useState, useEffect, useRef } from "react";
import "./ClimateModule.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/images/icons";

function ClimateModule() {
  return (
    <div className="ClimateModule">
      <p className="name">Climate</p>
      <div className="content">
        <FontAwesomeIcon icon={icons.faTemperatureFull} className="icon" />
      </div>
      <div className="control">
        <div className="main">
          <button>Minus</button>
          <button className="power">
            <FontAwesomeIcon icon={icons.faPowerOff} />
          </button>
          <button>Minus</button>
        </div>
        <div className="sub">
          <input type="range" min="0" max="100" value="50" step="1" />
        </div>
      </div>
    </div>
  );
}

export default ClimateModule;
