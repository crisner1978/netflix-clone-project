import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const history = useHistory()

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return () => window.removeEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix logo"
          className="nav_logo"
          onClick={() => history.push("/")}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user avatar"
          className="nav_avatar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  );
};

export default Navbar;
