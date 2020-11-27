import axios from "axios"
let http = axios.create({
    // baseURL:'/api'
})

http.interceptors.request.use(req => {
    return req
})

http.interceptors.response.use(res => {
    return res.data
})

export default http