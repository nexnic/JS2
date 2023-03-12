import {ErrorText} from '../base/variable.mjs';
import {errorBox} from '../base/domcontroller.mjs';

/**
 * 
 * @param {*id} value1
 */
export function ErrorMSg(value1) {
    let index = value1
    let msg = ErrorText[index];
    console.log(msg)
    errorBox.innerHTML = `
        <p>
            ${msg}
        </p>
    `
    errorBox.classList.add('alert-warning');
    setTimeout(() => {
        errorBox.classList.remove('alert-warning');
    }, 4000);
}

export function ErrorMSgAPI(value1) {
    
    let msg = value1
    console.log(msg)
    errorBox.innerHTML = `
        <p>
            ${msg.title}
        </p>
    `
    errorBox.classList.add('alert-warning');
    setTimeout(() => {
        errorBox.classList.remove('alert-warning');
    }, 4000);
}


