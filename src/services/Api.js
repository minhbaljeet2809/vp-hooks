import axios from "axios";


axios.defaults.baseURL = "http://api.vietpro.online/v1";

export const getProducts = (config) => {
    return axios.get("/products" , config);
}