import { useEffect, useState } from "react";
import { getWeather } from "../utils/weather";

const useWeather = () => {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const data = await getWeather(
        position.coords.latitude,
        position.coords.longitude
      );
      if (data) setWeather(data);
    });
  }, []);
  return weather;
};

export default useWeather;
