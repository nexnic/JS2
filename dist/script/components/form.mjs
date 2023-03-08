import {formsn , formsmComment } from '../base/domcontroller.mjs';
import { ValidEmail, ValidToken } from './validator.mjs';
import { metodPOST } from './methods.mjs';
import { fetchAPI } from './fetch.mjs';
import {Redirect } from './tools.mjs';



formsn.addEventListener('submit', (event) => {
    let id = 1;
    let email = formsn.elements['email'].value 
    let _password = formsn.elements['password'].value

    let check = ValidEmail(email);
    let method = metodPOST(email, _password)
    if(check) {
        let userData = fetchAPI(id, method);
        const promise1 = Promise.resolve(userData)
        promise1.then((value) =>{
            let user = {
                user: `name`, 
                email: 'email',
                accessToken: 'id',
                avatar: 'Imag',
                banner: 'image',
            }
            user['user'] = `${value.name}`;
            user['email'] = `${value.email}`;
            user['accessToken'] = `${value.accessToken}`;
            user['avatar'] = `${value.avatar}`;
            user['banner'] = `${value.banner}`;
            localStorage.setItem('user', JSON.stringify(user));
            let CheckData =  localStorage.getItem('user')
            if(CheckData) {
                window.location.href = 'main.html';
            }
        } )
        
        
    }
    event.preventDefault();
})







// accessToken


