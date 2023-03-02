import {formsn } from '../base/domcontroller.mjs';
import { ValidEmail  } from './validator.mjs';
import { metodPOST } from './methods.mjs';
import { fetchAPI } from './fetch.mjs';



formsn.addEventListener('submit', (event) => {
    let id = 1;
    let email = formsn.elements['email'].value 
    let _password = formsn.elements['password'].value

    let check = ValidEmail(email);
    let method = metodPOST(email, _password)
    if(check) {
        const promiseA = new Promise(fetchAPI(id, method))
        const promiseb = promiseA.then(console.log(promiseA), console.log(promiseA));
        
    } else {
        
    }
    event.preventDefault();
})

// Test new metod 



