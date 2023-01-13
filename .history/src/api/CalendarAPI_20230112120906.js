import axios from 'axios'

const axiosInstance = axios({
    baseURL:import.meta.env.VITE_URL_BACKEND,
})

export default axiosInstance;