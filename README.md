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
var latitude = formatter.latitude(Math.PI / 3);     // => 60° 00′ 00″ N 
var longitude = formatter.longitude(-33.4, true);   // => 034° 24′ 00″ W
```
                                        
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
