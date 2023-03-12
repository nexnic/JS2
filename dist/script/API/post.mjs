import { findAPIID } from '../components/tools.mjs' 
import {MethodToken} from '../API/methods.mjs';

export async function GetPost(value1, value2){
    const method = value1
    const url = findAPIID(value2)
    const fetchResult = await fetch(url, method)
    const result  = await fetchResult.json()
    if(fetchResult.ok) {
        return result
    }

    const responseError = {
        type: 'Error',
        message: result.errors[0] || '',
        data: result.status || '',
        code: result.statusCode || '',
      };
      
      const error = new Error();
        error.infor = responseError
        console.log(error)
    return (responseError);
}

export async function AddPost(value1, value2){
    const method = value1
    const url = findAPIID(value2)
    const fetchResult = await fetch(url, method)
    
    const result  = await fetchResult.json()
    console.log(result)
    if(fetchResult.ok) {
        return result
    }

    const responseError = {
        type: 'Error',
        message: result.errors[0] || '',
        data: result.status || '',
        code: result.statusCode || '',
      };
      
      const error = new Error();
        error.infor = responseError
        console.log(error)
    return (responseError);
}   