import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../api/CalendarAPI"
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice"

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
            dispatch(onLogout('USER NOT FOUND OR INCORRECT PASSWORD'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }

    const startRegister=async({name,email,password})=>{
        dispatch(onChecking());
        try {
            const body = {name,email,password}
            const {data}= await axiosInstance.post('api/auth/new',body);
            console.log(data)
        } catch (error) {
            console.log(error)
            
                dispatch(onLogout(!error.response.data.error ?'INTERNAL ERROR' :error.response.data.error[0]))
                setTimeout(() => {
                    dispatch(clearErrorMessage())
                }, 10);
                
            
        }
    }


    return{
        ...estadoAuth,
        startLogin,
        startRegister
    }
}