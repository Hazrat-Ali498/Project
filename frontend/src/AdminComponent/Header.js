import React from "react";
import {BsBellFill, BsPersonFill } from 'react-icons/bs';
import '../AdminComponent/Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg " >
        <div className="container-fluid" >

          <input type="Search" placeholder="Search here..." aria-label="Search" style={{ '::placeholder': {color: 'gray'}}}/>

          <div className="d-flex align-items-center ms-auto">
            <div className="mx-3">
              {/* Notification icon */}
              <div className="icon-container" style={{color:"gray",backgroundColor:"white",padding:"5px", borderRadius:"140px"}}>
                <BsBellFill className="icon" style={{fontSize:"15px"}} />
              </div>
            </div>
            <div className="mx-3">
              {/* Admin picture */}
              <div className="icon-container" style={{color:"gray",backgroundColor:"white",padding:"5px", borderRadius:"140px"}}>
                <BsPersonFill className="icon" />
              </div>
            </div>
            <div className="mx-2" style={{color:"gray"}}>
              {/* Admin name */}
              Hazrat Ali
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
