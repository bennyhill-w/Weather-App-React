import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">
        {weather.name}, {weather.sys.country}
      </h2>
      <div className="flex flex-col items-center mb-4">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16 mx-auto"
        />
        <p className="text-center text-4xl font-bold">{weather.main.temp}°C</p>
      </div>
      <p className="text-center text-lg text-gray-700 capitalize">
        {weather.weather[0].description}
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-200/60 p-4 rounded-lg text-center">
          <p className="font-semibold text-gray-800">Humidity</p>
          <p className="text-gray-700 font-bold">{weather.main.humidity}%</p>
        </div>
        <div className="bg-gray-200/60 p-4 rounded-lg text-center">
          <p className="font-semibold text-gray-800">Wind Speed</p>
          <p className="text-gray-700 font-bold">{weather.wind.speed} m/s</p>
        </div>
        <div className="bg-gray-200/60 p-4 rounded-lg text-center">
          <p className="font-semibold text-gray-800">Feels Like</p>
          <p className="text-gray-700 font-bold">{weather.main.feels_like}°C</p>
        </div>
        <div className="bg-gray-200/60 p-4 rounded-lg text-center">
          <p className="font-semibold text-gray-800">Pressure</p>
          <p className="text-gray-700 font-bold">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
