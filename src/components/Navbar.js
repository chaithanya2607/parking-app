import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const Navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">
          <img
            style={{ width: "40px", height: "40px" }}
            src="https://www.freeiconspng.com/uploads/vehicle-icon-png-car-sedan-4.png"
            alt="img"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              onClick={() => Navigate("/")}
              className="nav-link active"
              href="#"
            >
              Home <span className="sr-only">(current)</span>
            </a>
            <a onClick={() => Navigate("/checkin")} className="nav-link">
              Checkin
            </a>
            <a onClick={() => Navigate("/checkout")} className="nav-link">
              Checkout
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
