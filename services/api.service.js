import axios from 'axios'
import {FILE_VARIABLES, getKeyValue} from "./storage.service.js";

export const getIcon = (icon) => {
    switch (icon.slice(0, -1)) {
        case '01':
            return 'âī¸';
        case '02':
            return 'đ¤ī¸';
        case '03':
            return 'âī¸';
        case '04':
            return 'âī¸';
        case '09':
            return 'đ§ī¸';
        case '10':
            return 'đĻī¸';
        case '11':
            return 'đŠī¸';
        case '13':
            return 'âī¸';
        case '50':
            return 'đĢī¸';
    }
};
export const getWeather = async () => {
    const token = await getKeyValue(FILE_VARIABLES.TOKEN)
    const city = await getKeyValue(FILE_VARIABLES.CITY)
    if(!token) {
        throw new Error('No token setted. Set it with flag -t')
    }
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metrics'
        }
    })
    console.log(data)
   return data
}