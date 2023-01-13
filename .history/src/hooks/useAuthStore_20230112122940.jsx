import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../api/CalendarAPI"

export const useAuthStore =()=>{

    const estadoAuth= useSelector(state=>state.auth)
    const dispatch = useDispatch

    const startLogin =async ({email,password})=>{
        console.log(email,password)

        try {
           const body={email,password}
            const respuesta = await axiosInstance.post('api/auth',body)
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }


    return{
        ...estadoAuth,
        startLogin
    }
}