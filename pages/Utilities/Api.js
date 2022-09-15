import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://instagram130.p.rapidapi.com/account-info',
    params: { username: 'adele' },
    headers: {
        'X-RapidAPI-Key': '87e00c0f75msh8b7d5f1c63f8d85p1726a1jsnb2d6aba1d6ba',
        'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});