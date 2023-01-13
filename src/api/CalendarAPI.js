import axios from 'axios'

const axiosInstance = axios.create({
    baseURL:import.meta.env.VITE_URL_BACKEND,
})


axiosInstance.interceptors.request.use(config=>{


    config.headers={
        ...config.headers,
        'x-token': localStorage.getItem('token') || undefined
    }

    return config
})




export default axiosInstance;