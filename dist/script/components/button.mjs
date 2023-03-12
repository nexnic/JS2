import { Redirect, cleanLocalStorage  } from './tools.mjs'


// My profile image 

export function Profilebtn() {
    Redirect('profile.html');
}

export function Settingsbtn() {
    console.log('test');
}

export function signoutbtn() {
    let Cleanlocal = cleanLocalStorage()
    if(Cleanlocal){
        Redirect('index.html');
    }   
    else {
        console.log('fail');
    }
}

export function NewPostbtn(){
    
}