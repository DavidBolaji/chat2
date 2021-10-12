const unique = (str1,str2) => {
    let obj = {};
    let obj2 = {};
    str1.split('').forEach(e => {
        if(!obj[e]) {
            obj[e] = 0;
        }
        obj[e]++
    })
    str2.split('').forEach(e => {
        if(!obj2[e]) {
            obj2[e] = 0;
        }
        obj2[e]++
    })

    let newObj = Number(Object.values(obj).sort().join('')) + Number(Object.values(obj2).sort().join(''));
    return String(newObj);
}

export default unique;