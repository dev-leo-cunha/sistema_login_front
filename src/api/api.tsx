import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tranquil-ocean-04946.herokuapp.com/'
})

export default api