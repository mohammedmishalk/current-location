function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const { latitude, longitude } = position.coords;
        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
          const response = await fetch(url);
          const data = await response.json();

          if (data) {
            const address = data.display_name;
            console.log(address);
            callback(null, { latitude, longitude, address });
          } else {
            console.log('No results found');
            callback(null, { latitude, longitude, address: null });
          }
        } catch (error) {
          console.error('Error:', error);
          callback(error);
        }
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
  getLocation,

};
