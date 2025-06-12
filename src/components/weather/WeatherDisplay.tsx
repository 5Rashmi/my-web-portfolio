import useWeather from "../../hooks/useWeather";
import Spinner from "../../ui/loading/Spinner";

const WeatherDisplay = () => {
  const weather = useWeather();

  if (!weather) {
    return <Spinner />;
  }

  const temp = weather.main.temp;
  const roundTemp = temp.toString().slice(0, 2);

  return (
    <div className="p-4 text-white">
      <div className="flex items-center space-x-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-20 h-20"
        />
        <p>{roundTemp}°C</p>
        <p>{weather.weather[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
