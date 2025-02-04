import { useState, useEffect, useRef } from "react";
import "./MediaModule.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function MediaModule() {
  return (
    <div className="MediaModule">
      <p className="name mb-2">Media</p>
      <div className="content mb-2">
        <FontAwesomeIcon icon={icons.faMusic} className="icon" />
      </div>

      <div className="control flex flex-col items-center gap-2">
        <div className="main flex items-center justify-center gap-1">
          <button className="bg-gray-400 rounded-md w-8 h-8 hover:bg-gray-500 flex items-center justify-center">
            <FontAwesomeIcon icon={icons.faAngleLeft} className="icon size-4" />
          </button>

          <button className="bg-gray-400 rounded-md w-8 h-8 hover:bg-gray-500 flex items-center justify-center">
            <FontAwesomeIcon icon={icons.faPlay} className="icon size-4" />
          </button>

          <button className="bg-gray-400 rounded-md w-8 h-8 hover:bg-gray-500 flex items-center justify-center">
            <FontAwesomeIcon
              icon={icons.faAngleRight}
              className="icon size-4"
            />
          </button>
        </div>
        <div className="sub">
          <input
            className="w-full h-2 bg-gray-500 rounded-sm"
            type="range"
            min="0"
            max="100"
            value="50"
            step="1"
          />
        </div>
      </div>
    </div>
  );
}

export default MediaModule;
