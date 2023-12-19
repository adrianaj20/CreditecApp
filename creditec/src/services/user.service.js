
const URL_BASE = 'http://192.168.100.17:4500' 

export const registerService = (object) => {
    console.log(object)
    return fetch(URL_BASE+'/register', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    })
    .then(res => {
        if(!res.ok) {
            throw Error()
        }
    })
}

export const loginService = (object) => {
    
    return fetch(URL_BASE+'/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(object),
    })
    .then(res => {
        if(!res.ok) {
            throw Error()
        }
        return res.json()
    })
}