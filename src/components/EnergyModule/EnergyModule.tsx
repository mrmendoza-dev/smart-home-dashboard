import { useState, useEffect, useRef } from "react";
import "./EnergyModule.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function EnergyModule() {
  return (
    <div className="EnergyModule">
      <p className="name mb-2">Energy Usage</p>
      <div className="content mb-2">
        <FontAwesomeIcon icon={icons.faBolt} className="icon" />
      </div>

      <div className="main">
        {/* <button>Previous</button>
              <button>Play</button>
              <button>Next</button> */}
      </div>
      <div className="sub">
        {/* <input type="range" min="0" max="100" value="50" step="1" /> */}
        <p className="">Error Connecting</p>
      </div>
    </div>

  );
}

export default EnergyModule;
