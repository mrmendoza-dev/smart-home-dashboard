import "./LockScreen.css";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../assets/icons";

function LockScreen(props: any, ref: any) {
  const [isToggled, setIsToggled] = useState(false);
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const defaultPin = "0000";

  const toggleOverlay = () => {
    setIsToggled(!isToggled);
    console.log(isToggled);
  };

  useImperativeHandle(ref, () => ({
    toggleOverlay: toggleOverlay,
  }));

  const handleButtonClick = (number: any) => {
    if (pin.length < 4) {
      setPin(pin + number);
      if (pin.length === 3) {
        setTimeout(() => {
          checkPin(pin + number);
        }, 200);
      }
    }
  };

  const checkPin = (pin: any) => {
    if (pin === defaultPin) {
      setMessage("correct");
      setIsToggled(false);
    } else {
      setMessage("incorrect");
    }
    setTimeout(() => {
      setPin("");
      setMessage("");
    }, 1000);
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };
  const handleClearAll = () => {
    setPin("");
  };

  return (
    <div
      className="LockScreen"
      style={{ width: isToggled ? "100%" : "0%", opacity: isToggled ? 0.9 : 0 }}
    >
      <div className="keypad">
        <div className="input-display">{pin}</div>
        <div className="message">{message}</div>
        <div className="buttons">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
            <button key={number} onClick={() => handleButtonClick(number)}>
              {number}
            </button>
          ))}
          <button className="backspace" onClick={handleBackspace}>
            <FontAwesomeIcon icon={icons.faAngleLeft} />
          </button>
          <button onClick={() => handleButtonClick(0)}>0</button>

          <button className="clear" onClick={handleClearAll}>
            <FontAwesomeIcon icon={icons.faXmark} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(LockScreen);
