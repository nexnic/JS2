
import { apiID , BASE_URL } from "../base/variable.mjs";
import {MethodToken} from '../components/methods.mjs'

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

export async function fetchPost(value1){
    let token = localStorage.getItem('accessToken')
    console.log(token);
    const url = findAPIID(value1)
    const method = MethodToken('GET', token);
    try {
        fetch(url, method)
        .then((res) => res.json)
        
    }catch(error) {
        console.log(error)
    }
}

export async function fetchtest(value1,value2){
    let Datainput = 'GET';
    const url = findAPIID(value1)
    const token = localStorage.getItem('accessToken');
    const method = MethodToken(Datainput, token);


    try {
        fetch(url,method)
        .then((response)=> response.json())
        .then((json) => {
            let result = JSON.stringify(json)
            localStorage.setItem(`${value2}`, result);
            return true
        })
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


