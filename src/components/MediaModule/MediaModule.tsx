import { useState, useEffect, useRef } from "react";
import "./MediaModule.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/images/icons";

function MediaModule() {
  return (
    <div className="MediaModule">
      <p className="name">Media</p>
      <div className="content">
        <FontAwesomeIcon icon={icons.faMusic} className="icon" />
      </div>
      <div className="control">
        <div className="main">
          <button>Previous</button>
          <button>Play</button>
          <button>Next</button>
        </div>
        <div className="sub">
          <input type="range" min="0" max="100" value="50" step="1" />
        </div>
      </div>
    </div>
  );
}

export default MediaModule;
