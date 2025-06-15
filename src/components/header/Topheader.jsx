import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import './header.css'

function Topheader() {
  return (
    <div className='top-header'>
      <div className="container">
        <Link to='/' className='logo' ><img src={logo} alt="logo" /></Link>

        <form action="" className='search-box'>
          <input type="text" name='search' id='search' placeholder='Search' />
          <button type='submit'><FaSearch /></button>
        </form>

        <div className="header-icon">
          <div className="icon">
            <FaRegHeart/>
            <span className='count'>0</span>
          </div>
          <div className="icon">
            <TiShoppingCart />
            <span className="count">0</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topheader
