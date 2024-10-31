import {useState, useEffect} from 'react';

export default function useFetchWeather() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchInput, setSearchInput] = useState("toronto");
    const [weatherData, setWeatherData] = useState([]);


  const fetchWeatherInfo = async () => {
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_APP_ID}`;
        setError('');
        setWeatherData([]);
        setIsLoading(true);
        const response = await fetch(apiUrl);
        if(!response.ok) {
            setError("Results not found! Please try again!");
        } else {
            const responseJson = await response.json();
            setWeatherData(responseJson);    
        }
    } catch {
        setError("Results not found! Please try again!");
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeatherInfo();
  }, []);

  const updateSearchInput = (value) => {
    setSearchInput(value);
  };

  return {
    isLoading,
    error,
    searchInput,
    weatherData,
    updateSearchInput,
    fetchWeatherInfo
  };
}