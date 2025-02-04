import { useState, useEffect } from "react";
import "./CarModule.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function CarModule() {
  const [batteryLevel, setBatteryLevel] = useState(
    Math.floor(Math.random() * 100)
  );
  const [estimatedTimeToFinish, setEstimatedTimeToFinish] = useState(0);
  const [chargingSpeed, setChargingSpeed] = useState(10000);

  // let chargingSpeed = 10000;

    useEffect(() => {
      const interval = setInterval(() => {
        setBatteryLevel((prevBatteryLevel) => {
          if (prevBatteryLevel < 100) {
            setEstimatedTimeToFinish(
              ((100 - (prevBatteryLevel + 1)) * chargingSpeed) / 1000
            );
            setChargingSpeed(
              Math.floor(Math.random() * (25000 - 9000 + 1)) + 9000
            );
            return prevBatteryLevel + 1;
          }
          return 100;
        });
      }, chargingSpeed);
      return () => clearInterval(interval);
    }, []);

  const getBatteryIcon = (level: any) => {
    let icon, color;
    if (level <= 0) {
      icon = icons.faBatteryEmpty;
      color = "#FF0000"; // red
    } else if (level <= 25) {
      icon = icons.faBatteryQuarter;
      color = "#FFA500"; // orange
    } else if (level <= 50) {
      icon = icons.faBatteryHalf;
      color = "#FFFF00"; // orange
    } else if (level <= 99) {
      icon = icons.faBatteryThreeQuarters;
      color = "#7CFC00"; // green
    } else {
      icon = icons.faBatteryFull;
      color = "#00FF00"; // green
    }
    return { icon, color };
  };

  const { icon, color } = getBatteryIcon(batteryLevel);

function formatTime(seconds: any) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(remainingSeconds.toFixed(0)).padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}:${paddedSeconds}`;
}

  return (
    <div className="CarModule">
      <p className="name mb-2">Car</p>
      <div className="content mb-2">
        <FontAwesomeIcon icon={icons.faCar} className="icon" />
      </div>
      <div className="main flex items-center justify-center gap-2">


        <FontAwesomeIcon icon={icons.faBolt} className="charge-icon" />
        <div className="battery-display">
          <FontAwesomeIcon
            icon={icon}
            className="icon"
            style={{ color: color }}
          />
          <p className="" style={{ color: color }}>
            {batteryLevel}
          </p>
        </div>
      </div>
      <div className="sub flex flex-col items-center mt-4">
        {/* <input type="range" min="0" max="100" value={batteryLevel} step="1" onChange={(e) => setBatteryLevel(e.target.value)} /> */}
      <p className="text-sm">Estimated charge time:</p>
        

        <p className="text-sm"> {formatTime(estimatedTimeToFinish)}</p>
      


      </div>
    </div>
  );
}

export default CarModule;
