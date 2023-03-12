import { apiID, BASE_URL } from "../base/variable.mjs";

export function Redirect(value1){
    window.location.href = `${value1}`;
}

export function StorageRemove(value1) {
    localStorage.removeItem(`${value1}`);
}

export function cleanLocalStorage() {
    localStorage.clear()
    if(localStorage){
        return true
    }else {
        return false
    }
}

export function timeData(){

}

export function FetchResult(value1){
    let storage = localStorage.getItem('result');
    localStorage.setItem(`${value1}`, storage)
}

export function RemoveLocalStore(value1){
    localStorage.removeItem(value1); 
}


/**
 * 
 * @param {email} value1 
 * @param {password} value2 
 * @returns 
 */
export function CreateUserObj(value1, value2){
    let UserData = {
        email: `${value1}`,
        password: `${value2}`,
    }
    return UserData
}


export function findAPIID(value1) {
    let Endpoint = apiID[value1];
    let url = BASE_URL + Endpoint;
    return url
}

export function CreateErrorMSG(value1){
    const errorMSG = document.querySelector('#form-Error__msg');
    let data = JSON.parse(localStorage.getItem('Error'))
    const datasize = data.errors.length
    errorMSG.innerHTML = `
        ${data.errors[0].message}
    `
}

/**
 * 
 * @param {*} value1 
 * @param {*} value1 
 */
export function toggelClass(value1, value2){
    value1.classList.toggle(`${value2}`)
}





