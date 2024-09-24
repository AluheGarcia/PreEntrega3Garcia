import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
      <h1>Store Rimworld Customizer</h1>
      
      </Link>

      <nav>
        <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/categoria/cabeza"}>Cascos/Gorros</NavLink></li>
          <li><NavLink to={"/categoria/torso"}>Camisas/Abrigos</NavLink></li>
          <li><NavLink to={"/categoria/piernas"}>Pantalones</NavLink></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar