import React, { useState } from "react";

const weatherData = [
  {
    type: "Sunny",
    image: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    fact: "The sun is shining bright!",
  },
  {
    type: "Rainy",
    image: "https://cdn-icons-png.flaticon.com/512/4150/4150897.png",
    fact: "Rain is falling from the clouds!",
  },
  {
    type: "Snowy",
    image: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    fact: "Snow is white and cold!",
  },
  {
    type: "Windy",
    image: "https://cdn-icons-png.flaticon.com/512/1113/1113849.png",
    fact: "The wind is blowing fast!",
  },
  {
    type: "Cloudy",
    image: "https://cdn-icons-png.flaticon.com/512/414/414927.png",
    fact: "The sky is full of clouds!",
  },
  {
    type: "Rainbow",
    image: "https://cdn-icons-png.flaticon.com/512/414/414970.png",
    fact: "Look! A colorful rainbow!",
  },
];

const seasonsData = [
  {
    type: "Spring",
    image: "https://cdn-icons-png.flaticon.com/512/1684/1684375.png",
    fact: "Flowers bloom in spring!",
  },
  {
    type: "Summer",
    image: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    fact: "We eat ice creams in summer!",
  },
  {
    type: "Autumn",
    image: "https://cdn-icons-png.flaticon.com/512/3515/3515893.png",
    fact: "Leaves fall in autumn!",
  },
  {
    type: "Winter",
    image: "https://cdn-icons-png.flaticon.com/512/4150/4150941.png",
    fact: "We wear sweaters in winter!",
  },
];

const WeatherAndSeasons = () => {
  const [showWeather, setShowWeather] = useState(true);

  const dataToShow = showWeather ? weatherData : seasonsData;
  const title = showWeather ? "Types of Weather" : "Seasons of the Year";

  return (
    <div style={{ padding: 20, background: "#fef8e0", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", fontFamily: "Comic Sans MS, cursive" }}>🌦️ {title}</h1>
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button
          onClick={() => setShowWeather(true)}
          style={{ marginRight: 10, padding: "10px 20px", backgroundColor: showWeather ? "#4caf50" : "#ddd", border: "none", borderRadius: 5, cursor: "pointer" }}
        >
          Weather
        </button>
        <button
          onClick={() => setShowWeather(false)}
          style={{ padding: "10px 20px", backgroundColor: !showWeather ? "#2196f3" : "#ddd", border: "none", borderRadius: 5, cursor: "pointer" }}
        >
          Seasons
        </button>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {dataToShow.map((item) => (
          <div key={item.type} style={{ width: 200, background: "#fff", margin: 10, padding: 15, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
            <img src={item.image} alt={item.type} style={{ width: "100px", height: "100px" }} />
            <h3>{item.type}</h3>
            <p>{item.fact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherAndSeasons;
