import chalk from 'chalk'
import dedent from 'dedent-js'
import {getIcon} from "./api.service.js";

export const printError = (error) => {
    console.log(chalk.bgRed(" ERROR "), error)
}

export const printSuccess = (error) => {
    console.log(chalk.bgGreen(" SUCCESS "), error)
}

export const printHelp = () => {
    console.log(
        dedent(`${chalk.bgCyan(' HELP ')}
		No params passed - shows weather
		-s [CITY] set city with this flag
		-h help
		-t [API_KEY] set token with this flag
		`)
    );
}

export const printWeather = (res) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Weather in the city ${res.name}
		${getIcon(res.weather[0].icon)}  ${res.weather[0].description}
		Temperature: ${res.main.temp} (fills like ${res.main.feels_like})
		Humidity: ${res.main.humidity}%
		Wind speed: ${res.wind.speed}
		`
    );
};