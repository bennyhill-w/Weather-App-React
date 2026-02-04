import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY =
    import.meta.env.VITE_API_KEY || import.meta.env["VITE-API-KEY"];
  if (!API_KEY) {
    console.error(
      "VITE_API_KEY is not defined. Add it to your .env as VITE_API_KEY=<your_key>",
    );
  }
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the city name and try again.");
      } else {
        setError("An error occurred while fetching the weather data.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/weather-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="p-10 bg-white/50 rounded-lg shadow-lg max-w-md w-full z-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 m-6">
          Weather App
        </h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && <p className="text-center mt-4">Loading...</p>}
        {error && <p className="text-center text-red-500 mt-4">{error}</p>}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
