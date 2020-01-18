import axios from 'axios'

let baseURL = 'http://localhost:3000/api'
export default axios.create({
    baseURL
})