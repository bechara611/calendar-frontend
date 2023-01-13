import { TextField } from '@mui/material'
import React from 'react'
import { useForm } from '../../hooks/useFormulario'
import './login.css'
export const LoginPages = () => {

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
const {onInputChange:onInputChangeLogin, loginEmail,loginPassword,}= useForm(loginFields,formValidationsLogin)
const {onInputChange:onInputChangeRegister,registerEmail,registerName,registerPassword,registerPassword2}= useForm(registerFields,formValidationsRegister)
  
const onSubmitLogin=(e)=>{
    e.preventDefault();
    console.log(estadoLogin)
    console.log(estadoRegister)
}


return (
    <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>LOGIN</h3>
                    <form>
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
                    <form>
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
                                className="form-control"
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
                            onSubmit={onSubmitLogin}
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