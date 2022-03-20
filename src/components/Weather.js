import axios from "axios";
import { useEffect, useState } from "react";
import { useWeather } from "../contexts/WeatherContext";
import { useBackground } from "../contexts/BackgroundContext";

export default function Weather() {
  const { city } = useWeather();

  const { background, setBackground } = useBackground();

  const [isLoading, setIsLoading] = useState(false);

  const [weather, setWeather] = useState([]);

  const apiKey = "6f1c505aebdb5646c9fe4d48210178fc";

  const getCityData = async () => {
    const cityData = await axios(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
    )
      .then((res) => res.data[0])
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));

    return cityData;
  };

  const getWeather = async () => {
    const cityData = await getCityData();

    await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=minutely,hourly,alerts&&units=metric&appid=${apiKey}`
    )
      .then((res) => {
        setWeather(res.data.daily);
        setBackground(res.data.current.weather[0].main.toLowerCase());
      })
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    getWeather();
  }, [city]);

  const now = new Date(); // now
  now.setHours(13);
  now.setMinutes(0);
  now.setSeconds(0);

  const today = Math.floor(now / 1000);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          {isLoading && <div>Loading...</div>}
          <div className="weather">
            {weather.map((value, index) => (
              <div
                key={index}
                className={`forecast-day ${today === value.dt ? "today" : ""}`}
              >
                <p className="day-date">
                  {new Date(value.dt * 1000).toLocaleDateString("en", {
                    day: "numeric",
                    month: "numeric",
                  })}
                </p>
                <p className="day-title">
                  {new Date(value.dt * 1000).toLocaleDateString("en", {
                    weekday: "short",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/w/${value.weather[0].icon}.png`}
                  alt={value.weather[0].icon}
                />
                <div className="temps">
                  <div className="max-temp">
                    {value.temp.max.toFixed(0)}
                    <sup>°</sup>
                  </div>
                  <div className="min-temp">
                    {value.temp.min.toFixed(0)}
                    <sup>°</sup>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
