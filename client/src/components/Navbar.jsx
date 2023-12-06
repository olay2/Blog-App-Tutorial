import React from 'react';
import logo from '../img/logocat.png';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="link">
          <Link className='link' to="/?cat=art"><h6>ART</h6></Link>
          <Link className='link' to="/?cat=science"><h6>SCIENCE</h6></Link>
          <Link className='link' to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
          <Link className='link' to="/?cat=cinema"><h6>CINEMA</h6></Link>
          <Link className='link' to="/?cat=desige"><h6>DESIGE</h6></Link>
          <Link className='link' to="/?cat=food"><h6>FOOD</h6></Link>
          <span>Olay</span>
          <span>Logout</span>
          <span className='writeNav'>
            <Link className='link' to='/write'>Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar