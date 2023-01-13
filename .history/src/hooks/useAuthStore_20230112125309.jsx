import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../api/CalendarAPI"
import { onChecking } from "../store/auth/authSlice"

export const useAuthStore =()=>{

    const estadoAuth= useSelector(state=>state.auth)
    const dispatch = useDispatch();

    const startLogin =async ({email,password})=>{
        dispatch(onChecking)
        console.log(email,password)

        try {
           const body={email,password}
            const {data} = await axiosInstance.post('api/auth',body)
          console.log(data)
            localStorage.setItem('token',data.token)
        } catch (error) {
            console.log(error)
        }
    }


    return{
        ...estadoAuth,
        startLogin
    }
}