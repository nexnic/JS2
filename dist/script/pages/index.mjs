/**
 * Import Section for index.mjs
 * Import from dom Controller
 */
import {signform} from '../base/domcontroller.mjs'
import {ValidEmail} from '../components/validator.mjs'
import {ErrorMSg} from '../components/error.mjs'


signform.addEventListener('submit', (event) => {
   let email = signform.elements['email'].value
   let _password = signform.elements['password'].value
   
   let Checkmail = ValidEmail(email);
   if(Checkmail){
      
   }else {
      ErrorMSg(1)
   }
   


   event.preventDefault();
})


