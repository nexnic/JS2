// BASE
    // Dom Controller 
    import {navProfileImage} from '../base/domcontroller.mjs';


// <img src="" alt="" width="22" height="22" class="rounded-circle"></img>

export function BuildNav(){
   let userData = localStorage.getItem('UserData')
    addProfileImage(userData)
}

function addProfileImage(value1){
    let userData =  value1;

    if (!userData.avatar) {
        navProfileImage.innerHTML += `
        <img src="./dist/assest/Default_profile.svg" alt="" width="22" height="22" class="rounded-circle"></img>

        `
    }else {
        navProfileImage.innerHTML += `
        <img src="${userData.avatar}" alt="" width="22" height="22" class="rounded-circle"></img>
        `
    }
}