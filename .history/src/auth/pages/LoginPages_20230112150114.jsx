import { TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useAuthStore } from '../../hooks/useAuthStore'
import { useForm } from '../../hooks/useFormulario'
import './login.css'


const loginFields={
    loginEmail:'',
    loginPassword:'',
}
const formValidationsLogin ={
    loginEmail:[(value)=>value.includes('@'),'INSERT A VALID EMAIL'],
    loginPassword:[(value)=>value.length>=6,'INSERT A VALID EMAIL'],
     }
const registerFields={
    registerName:'',
    registerEmail:'',
    registerPassword:'',
    registerPassword2:''
}
const formValidationsRegister ={
    registerEmail:[(value)=>value.includes('@'),'INSERT A VALID EMAIL'],
    registerPassword:[(value)=>value.length>=6,'INSERT A VALID EMAIL'],
    registerName:[(value)=>value.length>=1,'INSERT A VALID NAME'],
    registerPassword2:[(value)=>value.length>=6,'INSERT A VALID EMAIL'],
     }

export const LoginPages = () => {

const {onInputChange:onInputChangeLogin, loginEmail,loginPassword,formState:estadoLogin,isFormValid:isFormValidLogin}= useForm(loginFields,formValidationsLogin)
const {onInputChange:onInputChangeRegister,registerEmail,registerName,registerPassword,registerPassword2,formState:estadoRegister,isFormValid:isFormValidRegister,registerEmailValid, registerPasswordValid}= useForm(registerFields,formValidationsRegister)
const {startLogin,errorMessage,startRegister} = useAuthStore();

useEffect(() => {
  if(errorMessage!==undefined){
    Swal.fire('ERROR',errorMessage,'error')
  }

  
}, [errorMessage])


const onSubmitLogin=(e)=>{
    e.preventDefault();
 startLogin({email:loginEmail,password:loginPassword})
 
}

const onSubmitRegister=(e)=>{
    e.preventDefault();
    
    if(registerPassword!==registerPassword2){
        Swal.fire('Error','Please, insert a valid password','error')
        return
    }
    if(isFormValidRegister){

        startRegister({email:registerEmail,password:registerPassword,name:registerName})
    }else{
        Swal.fire('Error','Please, insert a valid information','error')
        return
    }
  
}


return (
    <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>LOGIN</h3>
                    <form     onSubmit={onSubmitLogin}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name='loginEmail'
                                value={loginEmail}
                                onChange={onInputChangeLogin}
                            />
                        
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name='loginPassword'
                                value={loginPassword}
                                onChange={onInputChangeLogin}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login"  
                                onSubmit={onSubmitLogin}
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2">
                    <h3>REGISTER</h3>
                    <form onSubmit={onSubmitRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name='registerName'
                                value={registerName}
                                onChange={onInputChangeRegister}
                                
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name='registerEmail'
                                value={registerEmail}
                                onChange={onInputChangeRegister}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className={`form-control ${(registerPasswordValid && isFormValidRegister ) ? 'is-invalid':'' }`}
                                placeholder="Password" 
                                name='registerPassword'
                                value={registerPassword}
                                onChange={onInputChangeRegister}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password" 
                                name='registerPassword2'
                                value={registerPassword2}
                                onChange={onInputChangeRegister}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input 
                                type="submit" 
                                className="btnSubmit " 
                                value="REGISTER" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}