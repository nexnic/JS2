

export function ValidEmail(value1) {
    let email =  value1;
    const regex = new RegExp('[a-z0-9]+@noroff.no');

    let checkEmail =  regex.test(email);
    
    return checkEmail 
}



// Token validator 

