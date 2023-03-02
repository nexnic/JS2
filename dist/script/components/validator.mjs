

export function ValidEmail(value1) {
    let email =  value1;
    const regex = new RegExp('[a-z0-9]+@stud.noroff.no');

    let checkEmail =  regex.test(email);
    
    return checkEmail 
}

function validPWD(value1) {
    let _password = value1; 

    let Strongreg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
    
    let checkPWD = Strongreg.test(_password);
}

// Token validator 

