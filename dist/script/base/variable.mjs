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
    3: '/api/v1/social/posts',
    4: '/api/v1/social/profiles', 
    5: '/api/v1/social/posts?_author=true&_reactions=true&_comments=true'
};


export const ErrorText = {
    1: 'The email address you provided is not valid. Please ensure that your email address contains either "@domain.com" or "@doma.com" in order to proceed. Kindly check and correct the email address provided. Thank you.', 
    2: 'We are sorry, but there was an error processing your request through the API. If the problem persists, please contact our support team for further assistance. Thank you.',
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