import React from 'react'
import { useDispatch } from 'react-redux';
import { onLogout } from '../../store/auth/authSlice';
import './NavBar.css'
export const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-2">
    <span className='navbar-brand'>
 
    <i className="fa-sharp fa-solid fa-calendar icono"></i>

    &nbsp;
    Dany Bechara
    </span>
    <button className='btn btn-danger ' onClick={()=>dispatch(onLogout())}>
    <i className="fa-solid fa-right-from-bracket"></i>
    
    <span> Logout</span>
    </button>
    </div>
  )
}
