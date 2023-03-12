/**
 * Import Section for index.mjs
 * Import from dom Controller
 */
import {signform, signError} from '../base/domcontroller.mjs'
import {ValidEmail} from '../components/validator.mjs'
import {ErrorMSg} from '../components/error.mjs'
import {CreateUserObj} from '../components/tools.mjs'
import { MethodSignin } from '../API/methods.mjs'
import {FetchSingin} from '../API/signin.mjs';




signform.addEventListener('submit', (event) => {
   let type = 'POST';
   let email = signform.elements['email'].value
   let password = signform.elements['password'].value
   let UserData = CreateUserObj(email,password)
   let Checkmail = ValidEmail(email);
   if(Checkmail){
      let obj = MethodSignin(type, UserData)
      CheckAPI(obj,1)
   }else {
      ErrorMSg(1)
   }
   event.preventDefault();
})

async function CheckAPI(value1,value2){
   try {
      const userSaved = await FetchSingin(value1, value2); // calling fetch
      if(userSaved.type === 'Error'){
         let Errormsg= {
            title: userSaved.message.message
         }
         signError.innerHTML = `
            ${Errormsg.title}
         `
      }
      else{
         let UserData = JSON.stringify(userSaved)
         localStorage.setItem('UserData', UserData)
      }
   } catch (error) {
      console.log(error)
   } 
   
      
      
}