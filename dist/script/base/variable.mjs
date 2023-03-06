/*
* 
* a variable is a container that stores a value, which can be a string, number, boolean, or other data type.
* Use strice mode is one
* strict mode is a feature that enables a stricter version of JavaScript, which helps to prevent common mistakes and improve code quality.
*/

'use strict';

export const filterREG = [
    { name: 'domain', item: 'noroff.no' },
    { name: 'domain', item: 'stud.noroff.no'},
]

export const BASE_URL = 'https://nf-api.onrender.com';

export const apiID = {
    1: '/api/v1/social/auth/login',
    2: '/api/v1/social/auth/register',
};


export const API_URL = {
    BASE_URL: 'https://nf-api.onrender.com',
    register_URL: '/api/v1/social/auth/register',
    login_URL: '/api/v1/social/auth/login',
    post_URL: '/api/v1/social/posts'
}

// Value need for Register user 
    // Emali , noroff.com !requier 
    // User Name unix name !requier 
    // Password need to be 8 long and unix sign !requier  
    // Banner uploading a banner 
    // User profile image 

export const metode_API = {
    postData: {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
    }, 
    fetchData: {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: ``,
        }
    }
}