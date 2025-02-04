import { useState, useEffect, useRef } from "react";
import "./ClimateModule.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function ClimateModule() {
  return (
    <div className="ClimateModule">
      <p className="name mb-2">Climate</p>
      <div className="content mb-2">
        <FontAwesomeIcon icon={icons.faTemperatureFull} className="icon" />
      </div>

      <div className="control">
        <div className="main">
          {/* <button>Minus</button> */}
          <button className="power text-red-400/25">
            <FontAwesomeIcon icon={icons.faPowerOff} />
          </button>
          {/* <button>Minus</button> */}
        </div>
        <div className="sub">
          <input type="range" min="0" max="100" value="50" step="1" />
        </div>
      </div>
    </div>
  );
}

export default ClimateModule;
