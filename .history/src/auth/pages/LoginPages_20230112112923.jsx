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
const {onInputChange:onInputChangeLogin, loginEmail,loginPassword, formState:estadoLogin}= useForm(loginFields,formValidationsLogin)
const {onInputChange:onInputChangeRegister,registerEmail,registerName,registerPassword,registerPassword2,formState:estadoRegister}= useForm(registerFields,formValidationsRegister)
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
                            />
                        
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input 
                                type="submit"
                                className="btnSubmit"
                                value="Login" 
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
                                
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password" 
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password" 
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