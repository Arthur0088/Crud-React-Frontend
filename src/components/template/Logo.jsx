import "./Logo.css"
import logo from '../../assets/imgs/logo.png'
import React from 'react'


const Logo = () => {
  return (
    <aside className="logo">
        <img src={logo} alt="logo"/>
    </aside>
  )
}

export default Logo