import {ErrorText} from '../base/variable.mjs';
import {errorBox} from '../base/domcontroller.mjs';

/**
 * 
 * @param {*id} value1
 */
export function ErrorMSg(value1) {
    let msg = ErrorText[value1];
    errorBox.innerHTML += `
        <p>
            ${msg}
        </p>
    `
    errorBox.classList.add('alert-warning');
    setTimeout(() => {
        errorBox.classList.remove('alert-warning');
    }, 3000);
}

