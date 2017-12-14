# latlon-formatter

[![NPM Version](https://badge.fury.io/js/latlon-formatter.svg)](https://badge.fury.io/js/latlon-formatter.svg)
[![Build Status](https://travis-ci.org/solarpatrol/latlon-formatter.svg?branch=develop)](https://travis-ci.org/solarpatrol/latlon-formatter)
[![Coverage Status](https://coveralls.io/repos/github/solarpatrol/latlon-formatter/badge.svg?branch=develop)](https://coveralls.io/github/solarpatrol/latlon-formatter?branch=develop)
[![Downloads/month](https://img.shields.io/npm/dm/latlon-formatter.svg?maxAge=86400)](https://www.npmjs.com/package/latlon-formatter)
[![Greenkeeper badge](https://badges.greenkeeper.io/solarpatrol/latlon-formatter.svg)](https://greenkeeper.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A set of functions to format latitude and longitude angles.

## Installation

```bash
npm install latlon-formatter --save
```
    
## Usage

- ES6:

    ```javascript
    import { formatLatitude, formatLongitude } from 'latlon-formatter';
    const latitude = formatLatitude(Math.PI / 3); // => 60° 00′ 00″ N 
    const longitude = formatLongitude(-33.4, {
        degrees: true
    });   // => 034° 24′ 00″ W 
    ```

- require with Node.js:

    ```javascript
    var formatter = require('latlon-formatter');
    var latitude = formatter.latitude(Math.PI / 3); // => 60° 00′ 00″ N 
    var longitude = formatter.longitude(-33.4, {
        degrees: true
    });   // => 034° 24′ 00″ W
    ```

- in browser include `dist/latlon-formatter.js` or `dist/latlon-formatter.min.js` script:

    ```javascript
    var formatter = window.latlonFormatter;
    var latitude = formatter.latitude(Math.PI / 3); // => 60° 00′ 00″ N 
    var longitude = formatter.longitude(-33.4, {
        degrees: true
    });   // => 034° 24′ 00″ W
    ```
    
## Methods

- `latitude` or `formatLatitude` — format latitude angle.

    Arguments:
    
    - `value` — angle's value;
    - `options`:
        - `template` — custom template (optional, default — `{degree}° {prime}′ {doublePrime}″ {direction}`);
        - `degrees` — specifies whether `value` is in degrees or in radians (optional, default — `false`);
        - `fixedCount` — count of precision digits (optional, default — `null` leaving precision as is).

    Examples:

    ```javascript
    formatter.latitude(33.4); // => 34° 24′ 00″ N
    ```
    
    ```javascript
    formatter.latitude(-14.75, { degrees: true }); // => 14° 45′ 00″ S
    ```
    
    ```javascript
    formatter.latitude(-14.75, {
        template: '{negativeSign}{value}°',
        degrees: true,
        fixedCount: 1
    }); // => —14.8°
    ```
    
- `longitude` or `formatLongitude` — format longitude angle.

    Arguments:
    
    - `value` — angle's value;
    - `options`:
        - `template` — custom template (optional, default — `{degree}° {prime}′ {doublePrime}″ {direction}`);
        - `degrees` — specifies whether `value` is in degrees or in radians (optional, default — `false`);
        - `fixedCount` — count of precision digits (optional, default — `null` leaving precision as is).

    Examples:

    ```javascript
    formatter.longitude(33.4); // => 034° 24′ 00″ E
    ```
    
    ```javascript
    formatter.longitude(-14.75, { degrees: true }); // => 014° 45′ 00″ W
    ```
    
    ```javascript
    formatter.longitude(-14.75, {
        template: '{negativeSign}{value}°',
        degrees: true,
        fixedCount: 1
    }); // => —14.8°
    ```
    
- `angle` or `formatAngle` — format any custom angle.

    Arguments:
    
    - `value` — angle's value;
    - `options`:
        - `template` — custom template (optional, default — `{negativeSign}{value}°`);
        - `degrees` — specifies whether `value` is in degrees or in radians (optional, default — `false`);
        - `fixedCount` — count of precision digits (optional, default — `null` leaving precision as is);
        - `customTokens` — an object or a function returning an object of additional custom tokens used in `template`.
         
    Examples:
    
    ```javascript
    formatter.angle(3.4, {
        template: '{degree}° {prime}′ {doublePrime}″ {direction}',
        customTokens: f => {
            return {
                degree: (f.degrees < 10 ? '0' : '') + f.degree,
                direction: f.sign >= 0 ? 'N' : 'S'
            };
        }
    }); // => 03° 24′ 00″ N
    ```
        
## Template tokens
        
All three format methods (`latitude`, `longitude` and `angle`) have the following predefined template tokens:

- `value` — angle's absolute value with optional precision specified by `fixedCount` option;
- `degree` — absolute (two-digits and three-digits for `latitude` and `longitude` respectively) degree value;
- `prime` — absolute two-digits prime value;
- `doublePrime` — absolute two-digits double prime value;
- `sign` — value's sign:
    - `+` — positive value;
    - `—` — negative value;
    - empty — zero value;
- `negativeSign` — the same as `sign` except that it's empty for both zero and positive values.

`latitude` and `longitude` methods additionally have `direction` token:
- `N` — non-negative latitude;
- `S` — negative latitude;
- `E` — non-negative longitude;
- `W` — negative longitude.

Any custom additional tokens can be specified by `customTokens` option of `angle` method. 
                                        
## Building

In order to build library run:
                                          
    npm run build
    
## Testing
    
Run unit tests:
    
    npm test
    
In order to run tests with [Coveralls](http://coveralls.io) locally you have to provide `COVERALLS_REPO_TOKEN`:
    
    COVERALLS_REPO_TOKEN=<token> npm run test:coverage
    
## Contributing
    
Before making a pull request, please, be sure that you start from `develop` branch.

## License

[MIT](LICENSE)
