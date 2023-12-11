import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const token = localStorage.getItem("token");
  return (
    <nav>
      <h1>PROJECT</h1>
      <ul className="nav__list">
        {!token ? (
          <li className="s">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
              to="/login"
            >
              Log in
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
              to="/sign"
            >
              Sign up
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
              to="/profile"
            >
              profile
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
