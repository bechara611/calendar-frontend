import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../api/CalendarAPI"
import { onChecking, onLogin } from "../store/auth/authSlice"

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
            localStorage.setItem('token-init-time',new Date().getTime())
            dispatch(onLogin({uid:data.uid,name:data.usuario.name}))
            } catch (error) {
            console.log(error)
        }
    }


    return{
        ...estadoAuth,
        startLogin
    }
}