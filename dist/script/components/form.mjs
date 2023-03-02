import {formsn , formsnEmail, formsnPassword} from '../base/domcontroller.mjs';
import { filterREG } from '../base/variable.mjs';
import { fetchAPI } from './API.mjs'

formsn.addEventListener('submit', (event) => {
    let email = formsn.elements['email'].value 
    let _password = formsn.elements['password'].value

    let check = validEmail(email);
    if(check) {
        fetchAPI(email, _password)
    } else {
        
    }
    event.preventDefault();
})

function validEmail(value1) {
    let email = value1
    let splitemail = email.split('@');
    let Domain = splitemail[1];
    let Reg = /\S+@\S+\.\S+/; 
    let checkMail = Reg.test(email);

    filterREG.find(({ item })=> {
        if(Domain && checkMail) {
            return true
        }
        else{
            return false 
        }
    }) 
}

function validPWD(value1) {
    let _password = value1

}