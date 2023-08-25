import axios from "axios";

export function Weather(lat, lon, timezone) {
  return <div>Here's todays weather</div>;
  // return axios
  //   .get(
  //     "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,snow_depth,cloudcover&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=auto&forecast_days=1",
  //     {
  //       params: {
  //         latitude: lat,
  //         longitude: lon,
  //         timezone,
  //       },
  //     }
  //   )
  //   .then(({ data }) => {
  //     console.log(data);
  //     return {
  //       current: parseCurrentWeather(data),
  //       // daily: parseDailyWeather(data),
  //       // hourly: parseHourlyWeather(data),
  //     };
  //   });
}

// function parseCurrentWeather({ current_weather, daily }) {
//   const {
//     temperature: currentTemp,
//     windspeed: windSpeed,
//     weathercode: iconCode,
//   } = current_weather;
//   const {
//     temperature_2m_max: [maxTemp],
//     temperature_2m_min: [minTemp],
//     apparent_temperature_max: [maxFeelsLike],
//     apparent_temperature_min: [minFeelsLike],
//     precipitation_sum: [precip],
//   } = daily;

//   return <div>Here's todays weather</div>;
// }

// function parseDailyWeather({ daily }) {
//   return daily.time.map((time, index) => {
//     return {
//       timestamp: time * 1000,
//       iconCode: daily.weathercode[index],
//       maxTemp: Math.round(daily.temperature_2m_max[index]),
//     };
//   });
// }

// function parseHourlyWeather({ hourly, current_weather }) {
//   return hourly.time
//     .map((time, index) => {
//       return {
//         timestamp: time * 1000,
//         iconCode: hourly.weathercode[index],
//         temp: Math.round(hourly.temperature_2m[index]),
//         feelsLike: Math.round(hourly.apparent_temperature[index]),
//         windSpeed: Math.round(hourly.windspeed_10m[index]),
//         precip: Math.round(hourly.precipitation[index] * 100) / 100,
//       };
//     })
//     .filter(({ timestamp }) => timestamp >= current_weather.time * 1000);
// }
