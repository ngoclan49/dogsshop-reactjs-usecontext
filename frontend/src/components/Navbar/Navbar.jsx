import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/dogs'>Dogspage</Link>
        <Link to='/cart'>My Cart</Link>
    </nav>
  )
}

export default Navbar