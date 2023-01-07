export const getArgs = (args) => {
    const res = {}
    const [executer, file, ...rest] = args;
    rest.forEach((value, index)=> {
        if(value[0]==='-') {
                res[value.slice(1)] = (typeof rest[index+1] !== 'undefined' && rest[index+1]?.[0] !== '-') ? rest[index+1] : true
        }
    })
    return res
}