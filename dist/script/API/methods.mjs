import { apiID , BASE_URL } from "../base/variable.mjs";


/**
 * 
 * @param {Method} value1 
 * @param {UserData} value2 
 * @returns 
 */
function MethodSignin(value1, value2){
    let obj = {
        method: `${value1}`,
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(value2),
    }
    return obj
}

function MethodToken(value1,){
    let token = localStorage.getItem('accessToken')
    let obj = {
        method: `${value1}`,
        headers: {
            'Content-Type' : 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    return obj 
}

function methodSignUp(value1, value2){
    let obj = {
        method: `${value1}`, 
        headers: {
            'Content-Type' : 'application/json',
        }
    }
}

export{MethodSignin, MethodToken, methodSignUp}

