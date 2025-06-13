import useWeather from "../../hooks/useWeather";
import Spinner from "../../ui/loading/Spinner";
import { getSentenceCase } from "../../utils/sentenceCaseConvert";

const WeatherDisplay = () => {
  const weather = useWeather();

  if (!weather) {
    return <Spinner />;
  }

  const temp = weather.main.temp;
  const roundTemp = temp.toString().slice(0, 2);
  const description = weather.weather[0].description;
  const sentenceCase = getSentenceCase(description);

  return (
    <div className="p-4 text-white">
      <div className="flex text-sm items-center space-x-2">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={description}
          className="w-12 h-12"
        />
        <p>{roundTemp}°C</p>
        <p>{sentenceCase}</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
