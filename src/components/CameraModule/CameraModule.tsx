import { useState, useEffect, useRef } from "react";
import "./CameraModule.css";
import barImg from "./images/rooms/bar.png";
import garageImg from "./images/rooms/garage.png";
import livingRoomImg from "./images/rooms/living-room.png";
import loungeImg from "./images/rooms/lounge.png";
import poolImg from "./images/rooms/pool.png";
import officeImg from "./images/rooms/office.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/images/icons";


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
      className={`${currentRoomIndex === index ? "active" : ""}`}
      onClick={() => handleRoomChange(index)}
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="SecurityModule">
      <p className="">{currentRoom.name}</p>
      <div className="camera-module-wrapper">
        <div className="camera-module camera-effect">
          <img className="footage" src={currentRoom.image} />
        </div>
      </div>

      <div className="control">
        <button onClick={handlePreviousRoom}>
          <FontAwesomeIcon icon={icons.faAngleLeft} className="icon" />
        </button>
        {roomButtons}
        <button onClick={handleNextRoom}>
          <FontAwesomeIcon icon={icons.faAngleRight} className="icon" />
        </button>
      </div>
    </div>
  );
}

export default SecurityModule;
