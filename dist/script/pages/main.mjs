import {Validlogin} from '../components/validator.mjs';
import {MethodToken} from '../components/methods.mjs';
import {CheckAfterPost , ShowFeed} from '../components/post.mjs';
import {fetchtest} from '../components/fetch.mjs';

const test =  fetchtest(3,'post');


let Check = CheckAfterPost()
if(Check){
    
    ShowFeed()
}