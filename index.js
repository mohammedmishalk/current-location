function getCurrentLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const { latitude, longitude } = position.coords;
        callback(null, { latitude, longitude });
      },
      function (error) {
        callback(error);
      }
    );
  } else {
    callback(new Error('Geolocation is not supported by this browser.'));
  }
}

module.exports = {
  getCurrentLocation
};
