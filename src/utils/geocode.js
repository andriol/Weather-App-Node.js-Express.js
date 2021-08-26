const request = require("request");

const geocode = (address, callback) => {
  const geocodeUrl =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiYW5kcmlvbCIsImEiOiJja3FncmNtbmcwNHh4MnBueG03NW95bm45In0.UWKfcvKAXfeOX78vjwJNwQ&limit=1";

  request({ url: geocodeUrl, json: true }, (error, response) => {
    if (error) {
      callback("unable to connect to location services", undefined);
    } else if (response.body.features.length === 0) {
      callback("unable to find location.Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longtitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
