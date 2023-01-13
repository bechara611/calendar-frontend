import { useDispatch, useSelector } from "react-redux"

const useAuthStore =async()=>{

    const estadoAuth= useSelector(state=>state.auth)
    const dispatch = useDispatch
    


    return{

    }
}