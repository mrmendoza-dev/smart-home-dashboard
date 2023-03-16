import { useState, useEffect, useRef } from "react";
import "./WeatherModule.css";
import { defaultWeatherData } from "./defaultData";

interface WeatherData {
  [key: string]: any[];
}

function WeatherModule() {
  const apiKey = "014cab97ef25e0042a32c8f3eca831b7";
  const baseUrl = "https://api.openweathermap.org/data/2.5/";

  const [coordinates, setCoordinates] = useState(defaultWeatherData.coord);
  const [currentWeatherData, setCurrentWeatherData] =
    useState<any>(defaultWeatherData);
  const [weatherData, setWeatherData] = useState<WeatherData>({});
  const [detailed, setDetailed] = useState(false);
  const [time, setTime] = useState(new Date());
  const [scale, setScale] = useState("F");

  function getWeatherData() {
    let apiUrl = `${baseUrl}weather?lat=${coordinates.lat}&lon=${
      coordinates.lon
    }&appid=${apiKey}&units=${"imperial"}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setCurrentWeatherData(data);
      });

    let apiUrl2 = `${baseUrl}forecast?lat=${coordinates.lat}&lon=${
      coordinates.lon
    }&appid=${apiKey}&units=${"imperial"}`;
    fetch(apiUrl2)
      .then((res) => res.json())
      .then((data) => {
        const groupedData = data.list.reduce((acc: any, curr: any) => {
          const day = curr.dt_txt.split(" ")[0];
          if (!acc[day]) {
            acc[day] = [];
          }
          acc[day].push(curr);
          return acc;
        }, {});

        const entries = Object.entries(groupedData);
        const limitedEntries = entries.slice(0, 5);
        const limitedObj: any = Object.fromEntries(limitedEntries);
        setWeatherData(limitedObj);
      });
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      setCoordinates({ lat: latitude, lon: longitude });
    });
  }, []);

  useEffect(() => {
    getWeatherData();
  }, [coordinates]);

  return (
    <div className="WeatherModule">
      <div className="header">
        <a
          href={`https://www.google.com/maps/@${coordinates.lat},${coordinates.lon}`}
          target="_blank"
        >
          <p className="weather-location">{currentWeatherData.name}</p>
        </a>

        <p className="weather-temp">
          {currentWeatherData.main.temp.toFixed(0)}&deg;
        </p>

        <p className="weather-status">{currentWeatherData.weather[0].main}</p>
        {/* <div className="flex weather-temp-range">
        <p className="">L:{currentWeatherData.main.temp_min.toFixed(0)}&deg;</p>
        <p className="">H:{currentWeatherData.main.temp_max.toFixed(0)}&deg;</p>
      </div> */}
      </div>
    </div>
  );
}

export default WeatherModule;
