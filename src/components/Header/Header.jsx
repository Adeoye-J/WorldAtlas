import React from 'react'
import "./header.scss"
import { FaMoon } from 'react-icons/fa';
import ToggleTheme from '../../utils/ToggleTheme/ToggleTheme';


const Header = () => {
  return (
    <div className='header-container'>
        <div className="header-details">
            <h1 className="header-text">
                World Atlas
            </h1>
            <div className="theme">
                <ToggleTheme />
            </div>
        </div>  
    </div>
  )
}

export default Header