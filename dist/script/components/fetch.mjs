
export async function fetchAPI(value1, value2 , value3, ) {
    const Base_url = 'https://nf-api.onrender.com'
    const Endpoint = findAPIID(value1);
    const url = Base_url + Endpoint;
    const methodData = value3(value2, value3);
    try {
        const response = await fetch(url, methodData);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }

}

const apiID = {
    1: '/api/v1/social/auth/login',
    2: '/api/v1/social/auth/register',
};

function findAPIID(value1) {
    let index = value1
    let Endpoint = apiID[index];
    return Endpoint
}
