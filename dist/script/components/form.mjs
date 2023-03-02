import {formsn } from '../base/domcontroller.mjs';
import { ValidEmail , validPWD } from './validator.mjs';
import {fetchAPI } from './fetch.mjs';


formsn.addEventListener('submit', (event) => {
    let id = 1;
    let email = formsn.elements['email'].value 
    let _password = formsn.elements['password'].value

    let check = ValidEmail(email);

    if(check) {
        
    } else {
        
    }
    event.preventDefault();
})

// Test new metod 



