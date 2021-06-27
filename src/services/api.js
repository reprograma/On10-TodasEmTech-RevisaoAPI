import axios from 'axios';
require('dotenv').config();

const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

/*
    Interceptador que acrescenta informações a requisição. 
    No exemplo abaixo ele adiciona uma chave de autorização
*/

// api.interceptors.request.use(async config => {
//     const token = process.env.REACT_APP_API_CATS_KEY;

//     if (token)
//         config.headers['x-api-key'] = token;
    
//     return config;
// });


export default api;