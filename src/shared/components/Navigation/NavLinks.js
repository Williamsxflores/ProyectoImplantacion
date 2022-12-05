import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = (props) => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          USUARIO
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/jobs`}>MIS EMPLEOS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">NUEVO EMPLEOS</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/business" exact>
            EMPRESAS
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <>
          <li>
            <NavLink to="/business" exact>
            EMPRESAS
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth">INICIAR SESION</NavLink>
          </li>
        </>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}> CERRAR SESION </button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
