import {findAPIID} from '../components/tools.mjs';


export async function FetchSingin(value1, value2){
    const url = findAPIID(value2)
    const method =  value1
    const fetchResult = await fetch(url, method)
    const result  = await fetchResult.json()
    if(fetchResult.ok){
        
        return result
        
    }
    
    
   
}


