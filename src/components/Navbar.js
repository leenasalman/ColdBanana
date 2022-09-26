import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import * as Icon from "react-bootstrap-icons";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  window.addEventListener('scroll', function(event){
    var navbar = document.getElementsByClassName('navbar')[0];
    var top = event.target.scrollTop;
    if(top >=246) {
      // if window Y position is >= 246, add class fixed if it already doesn't exist
      return !navbar.classList.contains('fixed') ? navbar.classList.add('fixed') : "";
    } else {
      //  if window Y position is <= 246, remove class fixed if it already exist
      return navbar.classList.contains('fixed') ? navbar.classList.remove('fixed') : "";
    }
  }, true)

  //show button on mobile side and don't show on desktop
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(()=>{
    showButton();
  }, []);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            CHILLED GRAPE
          </Link>
          <div>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <Icon.X /> : <Icon.List />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blog"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/pricing"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item nav-links-mobile">
                <Link to="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                {button && <Button buttonStyle="btn--primary">Login</Button>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
