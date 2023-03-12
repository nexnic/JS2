import {findAPIID} from '../components/tools.mjs';


export async function FetchSingin(value1, value2){
    const url = findAPIID(value2)
    const method =  value1
    const fetchResult = await fetch(url, method)
    const result  = await fetchResult.json()
    console.log()
    if(fetchResult.ok){
        
        return result
        
    }
    
    const responseError = {
        type: 'Error',
        message: result.errors[0] || 'Something went wrong',
        data: result.status || '',
        code: result.statusCode || '',
      };
      
      const error = new Error();
        error.infor = responseError
        console.log(error)
    return (responseError);
   
}


