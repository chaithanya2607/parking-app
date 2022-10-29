import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
const Navigate=useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img style={{width:"40px",height:"40px"}} src="https://www.freeiconspng.com/uploads/vehicle-icon-png-car-sedan-4.png" alt="img"/></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a  onClick={()=>Navigate("/")} class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a onClick={()=>Navigate("/checkin")} class="nav-link" href="#">Checkin</a>
            <a onClick={()=>Navigate("/checkout")} class="nav-link" href="#">Checkout</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
