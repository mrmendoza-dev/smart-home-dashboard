import { useState, useEffect } from "react";
import "./CarModule.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/images/icons";

function CarModule() {
  const [batteryLevel, setBatteryLevel] = useState(
    Math.floor(Math.random() * 100)
  );



  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel((prevBatteryLevel) =>
        prevBatteryLevel < 100 ? prevBatteryLevel + 1 : 100
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const getBatteryIcon = (level: any) => {
    if (level <= 0) {
      return icons.faBatteryEmpty;
    } else if (level <= 25) {
      return icons.faBatteryQuarter;
    } else if (level <= 50) {
      return icons.faBatteryHalf;
    } else if (level <= 99) {
      return icons.faBatteryThreeQuarters;
    } else {
      return icons.faBatteryFull;
    }
  };

  return (
    <div className="CarModule">
      <p className="name">Car</p>
      <div className="content">
        <FontAwesomeIcon icon={icons.faCar} className="icon" />
      </div>
      <div className="main">
        <FontAwesomeIcon icon={icons.faBolt} className="charge-icon" />
        <FontAwesomeIcon icon={getBatteryIcon(batteryLevel)} className="icon" />
        <p className="">{batteryLevel}</p>
      </div>
      <div className="sub">
        {/* <input type="range" min="0" max="100" value={batteryLevel} step="1" onChange={(e) => setBatteryLevel(e.target.value)} /> */}
      </div>
    </div>
  );
}

export default CarModule;
