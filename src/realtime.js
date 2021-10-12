const writeData = async (path,userId,name,email,pic, callback) => {
    const check = await fetch(`https://chat-clone-87936-default-rtdb.firebaseio.com/${path}.json`);

    const res = await check.json();

    const usersKey = [];

    for(const key in res) {
        usersKey.push(key)
    }

    const itExist = usersKey.some(e => e === userId)
    
    if(!itExist) {
        const query = await fetch(`https://chat-clone-87936-default-rtdb.firebaseio.com/${path}/${userId}.json`,{
            method:'POST',
            body:JSON.stringify({
                name,
                email,
                pic
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await query.json(); 
        return callback(data)
    }
    return callback(res)
}


const getLatest = async (path, callback) => {

    const query = await fetch(`https://chat-clone-87936-default-rtdb.firebaseio.com/${path}.json`);

    const queryData = await query.json();

    console.log(queryData);

    const objKeys = Object.keys(queryData)

    const holder = Object.keys(queryData).map(key => {
        return queryData[key]
    })

    const newId = [];

    const keyss = []

    for(let i = 0; i < objKeys.length; i++) {
        keyss.push(...Object.keys(holder[i]))
    }

    for(let a = 0; a < keyss.length; a++) {
        newId.push({
            uid: keyss[a],
            name: holder[a][keyss[a]].name,
            email: holder[a][keyss[a]].email,
            pic: holder[a][keyss[a]].pic
        })
    }

    callback(newId)
}

export { writeData, getLatest }
