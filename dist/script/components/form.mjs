import {formsn , formsnEmail, formsnPassword} from '../base/domcontroller.mjs';
import { filterREG } from '../base/variable.mjs';
import { fetchAPI } from './API.mjs'

formsn.addEventListener('submit', (event) => {
    let email = formsn.elements['email'].value 
    let _password = formsn.elements['password'].value

    let check = NewValidEmail(email);
    if(check) {

    } else {
        
    }
    event.preventDefault();
})

// Test new metod 
function NewValidEmail(value1) {
    let email =  value1;
    const regex = new RegExp('[a-z0-9]+@stud.noroff.no');

    let checkEmail =  regex.test(email);
    
    return checkEmail 
}

function validPWD(value1) {
    let _password = value1; 

    let Strongreg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    
    let checkPWD = Strongreg.test(_password);
}
