const API_ROOT = "https://obscure-tundra-62741.herokuapp.com/api/v1";

const apiCall = (endpoint, obj) => {
    let fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
    console.log(obj);

    return fetch(fullUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson;
        }).then(
            response => ({response}),
            error => ({error: error.message || 'Something bad happened'})
        );
};

export const postConvertWordsToTNine = (obj = {}) => apiCall("/convertWordsToTNine", obj);

