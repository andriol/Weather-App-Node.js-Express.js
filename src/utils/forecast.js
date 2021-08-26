const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=72f0c9c3f56ed4d1aa8c4f5f4dc56d35&query=" +
    latitude +
    "," +
    longtitude +
    "&units=m";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to the service", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        "The temperature is " +
          response.body.current.temperature +
          " . " +
          response.body.current.weather_descriptions[0]
      );
    }
  });
};
module.exports = forecast;
