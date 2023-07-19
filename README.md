# current-location-geo

A package for retrieving the current geolocation and address information.



## Features

- To get Current-location Of the  User
- You Can Tag location  with Images
- You Can Get Longitude & Latitude



## Browser Support

![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/main/src/opera/opera_48x48.png) | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![IE](https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |

## Installing

### Package manager

Using npm:

```bash
$ npm install current-location-geo
```


## Usage

Here's an example of how to use the `getLocation` function in a React component:



Once the package is installed, you can import the library using `import` or `require` approach:

```js
import { getLocation } from 'current-location-geo';
```



```js
 getLocation(function (err, position) {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log('Latitude:', position.latitude);
        console.log('Longitude:', position.longitude);
        console.log('Address:', position.address);
      }
    });
```
Example in react js :
 
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
````