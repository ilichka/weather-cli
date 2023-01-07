#!/usr/bin/env node
//We need it to run our projects as CLI

import {getArgs} from "./helpers/args.js";
import {printHelp, printSuccess, printError, printWeather} from "./services/log.service.js";
import {FILE_VARIABLES, saveKeyValue} from "./services/storage.service.js";
import {getWeather} from "./services/api.service.js";

const saveToken = async (token) => {
    if(!token.length) {
        printError('Token not provided')
        return
    }
    try {
        await saveKeyValue(FILE_VARIABLES.TOKEN,token)
        printSuccess('Token saved')
    } catch (e) {
        printError(e.message)
    }
}

const saveCity = async (city) => {
    if(!city.length) {
        printError('City not provided')
        return
    }
    try {
        await saveKeyValue(FILE_VARIABLES.CITY,city)
        printSuccess('City saved')
    } catch (e) {
        printError(e.message)
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather()
        printWeather(weather)
    } catch (e) {
        if(e?.response?.status === 404) {
            printError('Wrong city')
        } else if(e?.response?.status === 401) {
            printError('Wrong token')
        } else {
            printError(e.message)
        }

    }
}
const initCLI = () => {
    const args = getArgs(process.argv)
    if(args.h) {
        return printHelp()
    }
    if(args.s) {
        return saveCity(args.s)
    }
    if(args.t) {
        return saveToken(args.t)
    }
    return getForcast()
};

initCLI();