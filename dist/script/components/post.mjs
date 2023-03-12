
import {feed} from '../base/domcontroller.mjs'


export function CheckAfterPost(){
    let data = localStorage.getItem('post');
    if(data){
        return true
    }
} 



