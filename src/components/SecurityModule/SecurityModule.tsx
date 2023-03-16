import { useState, useEffect, useRef } from "react";
import "./SecurityModule.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function SecurityModule() {
  return (
    <div className="SecurityModule">
      <p className="name">Security</p>
      <div className="content">
        <FontAwesomeIcon icon={icons.faLock} className="icon" />
      </div>
      <div className="main">
        {/* <button>Previous</button>
              <button>Play</button>
              <button>Next</button> */}
      </div>
      <div className="sub">
        {/* <input type="range" min="0" max="100" value="50" step="1" /> */}
        <FontAwesomeIcon icon={icons.faPhoneVolume} className="icon" />
      </div>
    </div>
  );
}

export default SecurityModule;
