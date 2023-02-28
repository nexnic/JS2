import { loginUserName, loginPWD } from '../base/domcontroller.mjs';
import { check_login_mail, check_login_password } from './form.mjs';

loginUserName.addEventListener('input', check_login_mail);

loginPWD.addEventListener('input', check_login_password);