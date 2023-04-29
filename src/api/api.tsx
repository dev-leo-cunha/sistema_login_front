import axios from 'axios';

const api = axios.create({
    baseURL: 'https://system-login-api.herokuapp.com'
})

export default api