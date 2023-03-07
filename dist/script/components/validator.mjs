import { metodPOST } from "./methods.mjs";


export function ValidEmail(value1) {
    let email =  value1;
    const regex = new RegExp('[a-z0-9]+@noroff.no');

    let checkEmail =  regex.test(email);
    
    return checkEmail 
}



// Token validator 

export function Validlogin() {
    const token = localStorage.getItem('accessToken');
    return token;
}

export function ValidToken() {
    const url = 'https://nf-api.onrender.com/api/v1/social/posts'
    const token = localStorage.getItem('accessToken');
    const method = {
        metod: 'GET',
        headers: {
            Authorization: `${token}`,
        }
    }
    fetch(url, method)
    .then((response) => response.json())
    .then((json) => console.log(json))

}
