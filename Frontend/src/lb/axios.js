import axios from "axios"
// in deployment we dont have local host so we have this dynamic url.
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:1234/api" : "/api"

const api = axios.create({
    baseURL:BASE_URL
})

export default api;