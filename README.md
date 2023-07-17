# current-location-geo

A package for retrieving the current geolocation and address information.

## Installation

To install the package, use npm:
 
```bash
npm install current-location-geo

## Usage

Here's an example of how to use the `getLocation` function in a React component:

```jsx
 getLocation(function (err, position) {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Latitude:', position.latitude);
        console.log('Longitude:', position.longitude);
        console.log('Address:', position.address);
      }
    });




```jsx
import React, { useEffect } from 'react';
import { getLocation } from 'current-location-geo';

export default function App() {
  useEffect(() => {
    getLocation(function (err, position) {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Latitude:', position.latitude);
        console.log('Longitude:', position.longitude);
        console.log('Address:', position.address);
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}
