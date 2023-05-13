import React from "react";
import './Navbar.css';
function Navbar() {
  return (
    <div className="container">
      <header>
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google Logo"
        />
        <form>
          <input type="text" placeholder="Search" />
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </form>
      </header>
    </div>
  );
}

export default Navbar;
