import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import searchIcon from '../../assets/magnifying-glass-solid.svg'

import Avatar from "../Avatar/Avatar";

import "./Navbar.css";

const Navbar = () => {
    const user=null;
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to="/">
          <img src={logo} alt='logo' className="nav-item nav-logo" />
        </Link>
        <Link to="/about" className="nav-item nav-btn">About</Link> 
        <Link to="/contact" className="nav-item nav-btn">Contact</Link> 
        <Link to="/teams" className="nav-item nav-btn">For Teams</Link>
        <form>
            <input type="text" className="" placeholder="Search..." />
            <img src={searchIcon} alt='searchIcon' width="18" className='search-icon'/>
        </form> 
        {user === null ? 
            <Link to='/auth' className="nav-item nav-link">Log in</Link> :
            <>
                <Link to='/' style={{textDecoration:'none'}}>
                  <Avatar
                    backgroundColor="#009dff"
                    px='10px'
                    py='7px'
                    borderRadius='50%'
                    color='white'
                  >
                    M
                  </Avatar>
                </Link>
                <button className="nav-link nav-item">Log in</button>
            </>
        }
      </div>
    </nav>
  );
};

export default Navbar;
