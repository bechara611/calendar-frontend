import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../api/CalendarAPI"

export const useAuthStore =()=>{

    const estadoAuth= useSelector(state=>state.auth)
    const dispatch = useDispatch

    const startLogin =async ({email,password})=>{
        console.log(email,password)

        try {
            const respuesta = await axiosInstance.post()
        } catch (error) {
            
        }
    }


    return{
        ...estadoAuth,
        startLogin
    }
}