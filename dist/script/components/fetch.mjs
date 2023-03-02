
const Base_url = 'https://nf-api.onrender.com';
const Endpoint = '/api/v1/social/auth/login';

const UserData = {
    email: 'test_user_demo@noroff.no',
    password: 'testtest1234',
}

function PostMethod(value1) {
    let PostData = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(value1)
    }
    return PostData
}


async function fetchAPI(value1, value2 , value3, value4) {

    const url = value1+value2;
    
    try {
        const method = PostMethod(value3);
        const response = await fetch(url, method);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }

}

fetchAPI(Base_url, Endpoint , UserData )