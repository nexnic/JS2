import {formsn , formsmComment } from '../base/domcontroller.mjs';
import { ValidEmail, ValidToken } from './validator.mjs';
import { metodPOST } from './methods.mjs';
import { fetchAPI } from './fetch.mjs';



formsn.addEventListener('submit', (event) => {
    let id = 1;
    let email = formsn.elements['email'].value 
    let _password = formsn.elements['password'].value

    let check = ValidEmail(email);
    let method = metodPOST(email, _password)
    if(check) {
        // let data = fetchAPI(id, method)
        // console.log(data);
        let userData = fetchAPI(id, method);
        console.log(userData)
        const promise1 = Promise.resolve(userData)
        promise1.then((value) =>{
            localStorage.setItem('accessToken', `${value.accessToken}` );
            localStorage.setItem('email', `${value.email}`);
            localStorage.setItem('name', `${value.name}`);
        } )
        
        setInterval(() => {
            let token = localStorage.getItem('accessToken');
            if(token){
                window.location.href = 'main.html'
            }    
        }, 300);
        
    }
    event.preventDefault();
})







// accessToken


