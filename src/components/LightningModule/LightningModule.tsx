import { useState, useEffect, useRef } from "react";
import "./LightningModule.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function LightningModule() {
  return (
    <div className="LightningModule">
      <p className="name mb-2">Lighting</p>
      <div className="content mb-2">
        <FontAwesomeIcon icon={icons.faLightbulbEmpty} className="icon" />
      </div>

      <div className="control">
        <div className="main">
          {/* <button>Previous</button>
          <button>Play</button>
          <button>Next</button> */}
          <div className="main">
            {/* <button>Minus</button> */}
            <button className="power text-green-500/25">
              <FontAwesomeIcon icon={icons.faPowerOff} />
            </button>
            {/* <button>Minus</button> */}

          </div>
        </div>
        <div className="sub">
          <input type="range" min="0" max="100" value="50" step="1" />
        </div>
      </div>
    </div>
  );
}

export default LightningModule;
