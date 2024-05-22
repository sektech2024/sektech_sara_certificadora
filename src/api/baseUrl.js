import axios from "axios";

const api = axios.create({
    baseURL: 'https://apisara.sektech.com.br:8087/Api',
});

export default api;