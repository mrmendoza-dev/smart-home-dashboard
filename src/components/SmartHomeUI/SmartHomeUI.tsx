import { useState, useEffect, useRef } from "react";
import "./SmartHomeUI.css";
import WeatherModule from "../WeatherModule/WeatherModule";
import CameraModule from "../CameraModule/CameraModule";
import LightningModule from "../LightningModule/LightningModule";
import SecurityModule from "../SecurityModule/SecurityModule";
import MediaModule from "../MediaModule/MediaModule";
import EnergyModule from "../EnergyModule/EnergyModule";
import CarModule from "../CarModule/CarModule";
import ClimateModule from "../ClimateModule/ClimateModule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";
import LockScreen from "../LockScreen/LockScreen";
function SmartHomeUI() {
  const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);


      const overlayRef: any = useRef(null);

      const activateOverlay = () => {
        console.log("test");

        console.log(overlayRef);

        if (overlayRef.current) {
          overlayRef.current.toggleOverlay();
        }
      };

      
  return (
    <div className="SmartHomeUI">
      <LockScreen ref={overlayRef} />

      <div className="header">
        <div className="date-time">
          <p className="date">
            {time.toLocaleDateString("en-US", { weekday: "long" })}
            {", "}
            {time.toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
            })}
          </p>
          <p className="time">
            {time.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
        <div className="weather">
          <WeatherModule />
        </div>
      </div>

      <div className="module-grid">
        <div className="left column">
          <div className="module">
            <ClimateModule />
          </div>

          <div className="module">
            <MediaModule />
          </div>

          <div className="module">
            <LightningModule />
          </div>
        </div>

        <div className="center">
          <CameraModule />
        </div>

        <div className="right column">
          <div className="module">
            <SecurityModule />
          </div>
          <div className="module">
            <CarModule />
          </div>

          <div className="module">
            <EnergyModule />
          </div>
        </div>
      </div>

      <button className="btn-lock" onClick={activateOverlay}>
        <FontAwesomeIcon icon={icons.faLock} className="icon" />
      </button>

      {/* <div className="lock-screen"></div> */}
    </div>
  );
}

export default SmartHomeUI;
