import React from "react";
import '../styles/home.css'
import Search from "./Search";
import useFetchWeather from "./hooks/useFetchWeather";
import Weather from "./Weather";

const Home = () => {
    const {
        isLoading,
        error,
        searchInput,
        weatherData,
        updateSearchInput,
        fetchWeatherInfo
      } = useFetchWeather();
  
  return (
    <div className="container">
       <Search
            searchInput={searchInput}
            onUpdateSearchInput={updateSearchInput}
            onSubmit={fetchWeatherInfo}
       />
        <Weather 
            error={error}
            isLoading={isLoading}
            weatherData={weatherData}
        />
    </div>
  );
};

export default Home;
