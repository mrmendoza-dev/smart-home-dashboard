import { useState, useEffect, useRef } from "react";
import "./CameraModule.css";
import barImg from "./images/rooms/bar.png";
import garageImg from "./images/rooms/garage.png";
import livingRoomImg from "./images/rooms/living-room.png";
import loungeImg from "./images/rooms/lounge.png";
import poolImg from "./images/rooms/pool.png";
import officeImg from "./images/rooms/office.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";


function SecurityModule() {
  const rooms = [
    { name: "Living Room", image: livingRoomImg },
    { name: "Lounge", image: loungeImg },
    { name: "Garage", image: garageImg },
    { name: "Bar", image: barImg },
    { name: "Pool", image: poolImg },
    { name: "Office", image: officeImg },
  ];

  const [currentRoomIndex, setCurrentRoomIndex] = useState(0);
  const currentRoom = rooms[currentRoomIndex];

  const handlePreviousRoom = () => {
    setCurrentRoomIndex(
      currentRoomIndex === 0 ? rooms.length - 1 : currentRoomIndex - 1
    );
  };

  const handleNextRoom = () => {
    setCurrentRoomIndex(
      currentRoomIndex === rooms.length - 1 ? 0 : currentRoomIndex + 1
    );
  };

    const handleRoomChange = (index: number) => {
      setCurrentRoomIndex(index);
    };

  const roomButtons = rooms.map((room, index) => (
    <button
      key={index}
      className={`btn-room ${currentRoomIndex === index ? "active" : ""}`}
      onClick={() => handleRoomChange(index)}
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="CameraModule">
      <p className="">{currentRoom.name}</p>
      <div className="camera-module-wrapper">
        <div className="camera-module camera-effect">
          <img className="footage" src={currentRoom.image} />
          <div className="camera-overlay">
            <div className="recording">
              <div className="led"></div>
              <p>REC</p>
            </div>

            <p className="room">CAM {currentRoomIndex + 1}</p>
            <div className="bottom-text">
              <p>ISO 800</p>
              <p>F 2.4</p>
              <p>HD1080P</p>
              <p>AWB</p>
            </div>
            
            <div className="corner-overlay top-left"></div>
            <div className="corner-overlay top-right"></div>
            <div className="corner-overlay bottom-left"></div>
            <div className="corner-overlay bottom-right"></div>
          </div>
        </div>
      </div>

      <div className="control">
        <button onClick={handlePreviousRoom} className="btn-next">
          <FontAwesomeIcon icon={icons.faAngleLeft} className="icon" />
        </button>
        {roomButtons}
        <button onClick={handleNextRoom} className="btn-next">
          <FontAwesomeIcon icon={icons.faAngleRight} />
        </button>
      </div>
    </div>
  );
}

export default SecurityModule;
