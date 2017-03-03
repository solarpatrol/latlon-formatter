# latlon-formatter

[![NPM Version](https://badge.fury.io/js/latlon-formatter.svg)](https://badge.fury.io/js/merge-professor)
[![Build Status](https://travis-ci.org/solarpatrol/latlon-formatter.svg?branch=dev)](https://travis-ci.org/solarpatrol/latlon-formatter)
[![Coverage Status](https://coveralls.io/repos/github/solarpatrol/latlon-formatter/badge.svg)](https://coveralls.io/github/solarpatrol/latlon-formatter)

A set of functions to format latitude and longitude angles.

## Installation

```bash
npm install latlon-formatter --save
```
    
## Usage

- require with Node.js:

    ```javascript
    var formatter = require('latlon-formatter');
    ```

- in browser include `dist/formatter.js` or `dist/formatter.min.js` script:

    ```javascript
    var formatter = window.latlonFormatter;
    ```
    
and then

```javascript    
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
        - `template` — custom template (optional, default — '{degree}° {prime}′ {doublePrime}″ {direction}');
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
        - `template` — custom template (optional, default — '{degree}° {prime}′ {doublePrime}″ {direction}');
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
        - `template` — custom template (optional, default — '{degree}° {prime}′ {doublePrime}″ {direction}');
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
    
## Contribution
    
Before making a pull request, please, be sure that your changes are rebased to `dev` branch.

## License

[MIT](LICENSE)
