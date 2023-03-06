
import { apiID , BASE_URL } from "../base/variable.mjs";

export async function fetchAPI(value1, value2) {
    const url = findAPIID(value1);
    const method = value2;
    try {
        const response = await fetch(url, method);
        if(response.status === 200) {
            return response.json();
        }else{
            console.log('fail');
        }
    } catch (error) {
        console.log(error);
    }
}


export async function fetchData(value1, value2){
    const url = findAPIID(value1);
    const method = value2;

    fetch(url,method)
    
    
}

export async function fetchlogin(value1, value2) {
    const url = findAPIID(value1);
    const method = value2;
    try {
        fetch(url, method) 
        .then((response) => response.json)
    }catch(error){
        console.log(error)
    }

}

function findAPIID(value1) {
    let index = value1
    let Endpoint = apiID[index];
    let url = BASE_URL + Endpoint;
    return url
}


