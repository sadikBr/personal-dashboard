import { useEffect, useState } from 'react';
import axios from 'axios';

const options = {
  method: 'GET',
  url: `https://api.weatherstack.com/current?access_key=${
    import.meta.env.VITE_API_KEY
  }`,
};

export default function useWeather() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        axios
          .request({
            ...options,
            params: {
              query: `${position.coords.latitude},${position.coords.longitude}`,
              units: 'm',
            },
          })
          .then((response) => {
            const data = response.data;

            setWeatherInfo({
              temperature: data.current.temperature,
              icon: data.current.weather_icons[0],
              city: data.location.name,
              country: data.location.country,
            });
          })
          .finally(() => {
            setLoading(false);
          });
      });
    } else {
      setLoading(false);
      console.log('Geolocation not available in your browser use another one');
    }
  }, []);

  return { weatherInfo, loading };
}
