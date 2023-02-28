/*
* This script is for login user and check user
*   using strict mode is on 
 */

'use strict';

export function checkToken() {
    // Getting the token from localStorage 
    let valideToken = localStorage.getItem('token');

    // We  need to verifie the token now, if get 200 code from the api 
    if(valideToken) {
        
    }
}