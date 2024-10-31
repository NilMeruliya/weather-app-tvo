import React from "react";
import '../styles/weather.css'
import PlaceIcon from "@mui/icons-material/Place";
import { CircularProgress } from "@mui/material";
import {
  getDayOfWeek,
  getFirstFiveDaysFromForecast,
  renderWeatherIcon
} from './service/index'

const Weather = ({ error, isLoading, weatherData }) => {
  return (
    <div className="info-container">
      {isLoading && <CircularProgress />}
      {error && <h1 className="error">{error}</h1>}
      {!isLoading && !error && weatherData && (
        <>
          <div className="weather-info-container">
            {renderWeatherIcon(
              weatherData?.list && weatherData?.list[0]?.weather[0]?.main
            )}
            <div className="location">
              <span className="location-icon">
                <PlaceIcon />
              </span>
              <span className="city-name">{`${weatherData?.city?.name}, ${weatherData?.city?.country}`}</span>
            </div>
            <div className="temperature">
              {weatherData?.list && weatherData?.list[0]?.main?.temp}&deg;C
            </div>
            <div className="temperature_minmax">
              <span>
                Min: {weatherData?.list && weatherData?.list[0]?.main?.temp_min}
                &deg;C
              </span>
              <span> | </span>
              <span>
                Max: {weatherData?.list && weatherData?.list[0]?.main?.temp_max}
                &deg;C
              </span>
            </div>
          </div>

          <div className="forecast-container">
            {getFirstFiveDaysFromForecast(weatherData)?.map((day, ind) => (
              <div className="forecast-item" key={ind}>
                <div className="forecast-icon">
                  {renderWeatherIcon(day?.weather[0]?.main)}
                </div>
                <div className="forecast-day">{getDayOfWeek(day?.dt_txt)}</div>
                <div className="minmax-temp">
                  Min: {day?.main?.temp_min}&deg;C
                </div>
                <div className="minmax-temp">
                  Max: {day?.main?.temp_max}&deg;C
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
