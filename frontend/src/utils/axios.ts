import axios from 'axios';

const axiosInstace = axios.create({
    baseURL: 'https://api.example.com',
})
axiosInstace.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
)

export default axiosInstace;