import { metodPOST } from "./methods.mjs";


export function ValidEmail(value1) {
    let email =  value1;
    const regex = /^[a-z0-9._%+-]+@(noroff.no|stud.noroff.no)$/;

    let checkEmail =  regex.test(email);
    
    return checkEmail 
}

export function ValidName(value1){
    
    let name = value1
    const regex = /^[a-zA-Z0-9_]+$/;

    let CheckName = regex.test(name); 
    return CheckName
}

export function ValidPassword(value1){
    if(value1.length >= 8){
        console.log('password pass')
        return true 
    }else{
        console.log('password fail')
        return false
    }
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
