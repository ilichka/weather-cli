## Core Module
This package provides current weather with CLI.

### Environment Setup
After you installed weather CLI you should navigate to https://openweathermap.org/ and get weather api.

### CLI available scripts
```json
  "scripts": {
    "weather": "node weather.js",
  },
```
To get info about current weather run script:
```sh
npm run weather
``` 
To set openweathermap token run script:
```sh
npm run weather -- -t [TOKEN]
``` 
To set current city run script:
```sh
npm run weather -- -s [CITY]
``` 
To get help run script:
```sh
npm run weather -- -h
``` 