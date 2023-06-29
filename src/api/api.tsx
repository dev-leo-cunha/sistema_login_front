import axios from 'axios';

// configurando a url base da api para não precisar ficar repetindo em todas as requisições
const api = axios.create({
    baseURL: 'https://tranquil-ocean-04946.herokuapp.com/'
//    baseURL: 'http://localhost:3000/'
})

export default api