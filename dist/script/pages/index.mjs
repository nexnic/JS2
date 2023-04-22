/**
 * Import Section for index.mjs
 * Import from dom Controller
 */
import {signform, signupForm ,signError , signBTN ,  signUp} from '../base/domcontroller.mjs'
import {ValidEmail, ValidName, ValidPassword} from '../components/validator.mjs'
import {ErrorMSg, ErrorMSgAPI} from '../components/error.mjs'
import {CreateUserObj, toggelClass } from '../components/tools.mjs'
import { MethodSignin } from '../API/methods.mjs'
import {FetchSingin} from '../API/signin.mjs';




signform.addEventListener('submit', (event) => {
   let type = 'POST';
   let email = signform.elements['email'].value
   let password = signform.elements['password'].value
   let UserData = CreateUserObj(email,password)
   let Checkmail = ValidEmail(email);
   if(Checkmail){
      toggelClass(signBTN, 'visually-hidden')
      let obj = MethodSignin(type, UserData)
      CheckAPIsign(obj,1)
      
   }else {
      ErrorMSg(1)
   }
   event.preventDefault();
})

async function CheckAPIsign(value1,value2){
   try {
      const userSaved = await FetchSingin(value1, value2); // calling fetch
      if(userSaved.type === 'Error'){
         toggelClass(signBTN, 'visually-hidden')
         let Errormsg= {
            title: userSaved.message.message
         }
         ErrorMSgAPI(Errormsg)
      }
      else{
         let UserData = JSON.stringify(userSaved)
         localStorage.setItem('UserData', UserData)
         console.log('pass')
         window.location.href = "main.html";
      }
   } catch (error) {
      console.log(error)
   } 
}

signupForm.addEventListener('submit', (event)=> {
   event.preventDefault();
   let type = 'POST'
   const formData = {};
   
   for(let i = 0; i < signupForm.elements.length; i++){
      const element = signupForm.elements[i];
      if(element.name){
         formData[element.name] = element.value.trim();
      }
   }
   if(!formData.name){
      ErrorMSg(7)
   }if(!formData.email){
      ErrorMSg(6)
   }if(!formData.password){
      ErrorMSg(5)
   }
   if(formData.name && formData.email && formData.password){
      let Checkmail = ValidEmail(formData.email);
      let CheckName = ValidName(formData.name)
      let CheckPassword = ValidPassword(formData.password)
      console.log(Checkmail)
      if(!Checkmail){
         ErrorMSg(1)
      }if(!CheckName){
         ErrorMSg(4)
      }if(!CheckPassword){
         ErrorMSg(7)
      }
      if(Checkmail && CheckName && CheckPassword){
         let obj = MethodSignin(type, formData)
         CheckApiSignup(obj, 2)
      }
   
   }
})

async function CheckApiSignup(value1,value2){
   toggelClass(signUp, 'visually-hidden')
   try {
      const userSaved = await FetchSingin(value1, value2);
      console.log(userSaved.type) 
      if(userSaved.type === 'Error' || userSaved.type === 'type'){
         let Errormsg= {
            title: userSaved.message.message
         }
         ErrorMSgAPI(Errormsg)
      }
      else{
         toggelClass(signUp, 'visually-hidden')
         // let UserData = JSON.stringify(userSaved)
         // localStorage.setItem('RegUse', UserData)
      }
   } catch (error) {
      console.log(error)
   } 
}
