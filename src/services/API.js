import axios from 'axios';

const API = axios.create({
    baseURL: "https://abakab.herokuapp.com"
})

export default API;