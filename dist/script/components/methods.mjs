

let MetodData = {
    method: '2',
    headers: {
        'Content-Type' : 'application/json',
    }
}

    let email =  'test_user_demo@noroff.no'
    let password = 'testtest1234'

    let userData = {
        email: '',
        password: '',
    };

// POST 
   export function metodPOST(value1, value2){
        let postData = MetodData;
        let tempUser = userData;
        postData['method'] = 'POST'
        tempUser['email'] = value1
        tempUser['password'] = value2
        postData['body'] = JSON.stringify(tempUser);
        return postData;
        
    }