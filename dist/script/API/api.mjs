import {findAPIID, CreateErrorMSG} from '../components/tools.mjs';




/**
 * 
 * @param {*} value1 
 * @param {*} value2 
 */
 export async function APICALL(value1,value2){
    const method = value1
    const url = findAPIID(value2)
    try {
        fetch(url,method)
        .then((respons)=>{
            return respons.json()
        })
        
        
    } catch (error) {
        console.log(error)
    }
}



/*
if(!response.ok){
                const data = response.json()
                const data1 = Object.values(data)
                
                
                
                throw new Error (`HTTP error: ${response.status} ${response.statusText} ${response.errors}`)
            }
            return response.json()
        
*/

/**
 * .then((json)=> {
            const data = json
            if(data.errors){
                const Error = localStorage.setItem('Error',JSON.stringify(json))
                return  Error
            }else {
                localStorage.setItem('Result', JSON.stringify(json))
                return 
            }
        })
 */

