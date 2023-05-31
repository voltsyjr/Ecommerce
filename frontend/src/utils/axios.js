import axios from "axios";
const instance = axios.create({
    // baseURL:"http://localhost:5000/"
    baseURL: "https://backend-production-0b83.up.railway.app/"

})

export default instance;