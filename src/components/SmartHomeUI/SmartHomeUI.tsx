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

function SmartHomeUI() {
  const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

  return (
    <div className="SmartHomeUI">
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
        <div className="left">
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

        <div className="left">
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
    </div>
  );
}

export default SmartHomeUI;
