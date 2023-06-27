import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tranquil-ocean-04946.herokuapp.com/'
//    baseURL: 'http://localhost:3000/'
})

export default api