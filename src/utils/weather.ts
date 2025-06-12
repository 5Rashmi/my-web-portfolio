import axios from "axios";

export const getWeather = async (lat: number, lon: number) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data ', error);
        return null;
    }
}