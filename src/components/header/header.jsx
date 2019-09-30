import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className='logo-container'>
        <Logo/>
      </Link>
      <div className='options'>
        <Link to="/tienda" className='option'>TIENDA</Link>
        <Link to="/contacto" className='option'>CONTACTO</Link>
      </div>
    </div>
  )
}

export default Header