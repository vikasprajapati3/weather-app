import React, { useEffect, useRef, useState } from "react";

import './Weather.css';



const Weather = () => {

    const inputRef = useRef();
    const [unit, setUnit] = useState("C");

    const [weatherData, setWeatherData] = useState(false);
    function getWindDirection(degree) {
        const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
        const index = Math.round(degree / 45) % 8;
        return directions[index];
    }
    const search = async (city) => {

        if (city === "") {
            alert("Enter City Name");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);

            const utcTimestamp = data.dt;
            const timezoneOffset = data.timezone;

            const localTimestamp = (utcTimestamp + timezoneOffset) * 1000;
            const localDate = new Date(localTimestamp);

            const formattedTime = localDate.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'UTC',
            });

            const formattedDate = localDate.toLocaleDateString('en-US', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                timeZone: 'UTC',
            });



            setWeatherData({
                windSpeed: Math.round(data.wind.speed * 3.6 * 10) / 10,
                windDirection: getWindDirection(data.wind.deg),
                temperature: Math.floor(data.main.temp),
                humidity: data.main.humidity,
                location: data.name,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                description: data.weather[0].description,
                time: formattedTime,
                date: formattedDate

            });
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data");
        }
    }


    useEffect(() => {
        search("Mumbai");
    }, [])

    return (
        <div className="weather">
            {/* Search Bar */}
            <div className="search-bar">
                <input
                    ref={inputRef}
                    type="text" placeholder="Search City"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            search(inputRef.current.value);
                        }
                    }}
                />
                <i
                    className="fa-solid fa-search searchIcon"
                    onClick={() => search(inputRef.current.value)}
                ></i>
            </div>

            {/* Weather Data */}
            {weatherData ? (
                <>
                    {/* Top Info: Location & Time */}
                    <div className="weather-header">
                        <p className="location">{weatherData.location}</p>
                        <p className="location-time">{weatherData.time}</p>
                    </div>
                    <p className="location-date">{weatherData.date}</p>

                    {/* Main Weather Display */}
                    <div className="weather-main">

                        <div className="temp-info">
                            <p className="temperature">
                                {unit === "C"
                                    ? weatherData.temperature
                                    : Math.floor((weatherData.temperature * 9) / 5 + 32)
                                }°
                                <span className="unit-toggle-inline">
                                    <span
                                        className={unit === "C" ? "active" : ""}
                                        onClick={() => setUnit("C")}
                                    >
                                        C
                                    </span>
                                    <span className="separator">|</span>
                                    <span
                                        className={unit === "F" ? "active" : ""}
                                        onClick={() => setUnit("F")}
                                    >
                                        F
                                    </span>
                                </span>
                            </p>


                            <p className="w-description">{weatherData.description}</p>


                        </div>
                        <img
                            src={weatherData.icon}
                            alt="weather icon"
                            className="weather-icon"
                        />
                    </div>

                    {/* Weather  Wind & Humidity */}
                    <div className="weather-data">
                        <div className="col">
                            <i className="fa-solid fa-wind weatherIconFa"></i>
                            <div>
                                <p>{weatherData.windSpeed} km/h,{weatherData.windDirection} </p>
                                <span>Wind Speed, Direction</span>
                            </div>
                        </div>
                        <div className="col">
                            <i className="fa-solid fa-droplet weatherIconFa"></i>
                            <div>
                                <p>{weatherData.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="cityError">
                    <p>Unable to fetch weather data. Please try again.</p>
                </div>
            )}
        </div>

    )

}

export default Weather;
