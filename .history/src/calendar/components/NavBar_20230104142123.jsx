import React from 'react'
import './NavBar.css'
export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-2">
    <span className='navbar-brand'>
    <i className='fas fa-calendar-alt'></i>
    <i className="fa-sharp fa-solid fa-check icono"></i>

    &nbsp;
    Dany Bechara
    </span>
    <button className='btn btn-danger '>
    <i className="fa-solid fa-right-from-bracket"></i>
    
    <span> Logout</span>
    </button>
    </div>
  )
}
