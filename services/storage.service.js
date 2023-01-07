import {homedir} from 'os'
import {promises} from 'fs'
import {join, basename, dirname, extname, relative, isAbsolute, resolve, sep} from 'path'
//basename returns us last string case basename(filepath)
//dirname returns us path to our file dirname(filepath)
//extname returns us extantion of out file extname(filepath)
//relative returns us path from to relative(from, to)
//isAbsolute returns true if absolute path
//resolve build path relative our current folder
//sep returns a separator value for current os (for windows it is "/")

const filePath = join(homedir(), 'weather-data.json')

export const FILE_VARIABLES = {
    TOKEN: 'token',
    CITY: 'city'
}

const isExist = async (path) => {
    try {
        await promises.stat(path)
        return true
    } catch (e) {
        return false
    }
}

export const getKeyValue = async (key) => {
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        const data = JSON.parse(file)
        return data[key]
    }
}

export const saveKeyValue = async (key, value) => {
    let data = {}
    if(await isExist(filePath)) {
        const file = await promises.readFile(filePath)
        data = JSON.parse(file)
    }
    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data))
}

