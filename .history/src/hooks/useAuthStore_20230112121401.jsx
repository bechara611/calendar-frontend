import { useDispatch, useSelector } from "react-redux"

const useAuthStore =()=>{

    const estadoAuth= useSelector(state=>state.auth)
    const dispatch = useDispatch

    const startLogin =async ({email,password})=>{
        console.log(email,password)
    }


    return{
        ...estadoAuth
    }
}