import React from "react";
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (

      <Navbar className="form-navbar" bg="" variant="tabs">
        <div className="form-cont-img-nav">

        </div>
          <Nav className="justify-content-around container me-auto">
              <NavLink id="main-nav" className={setActiveClass} to="/">
                  Principal
              </NavLink>
              <NavLink id="main-nav" className={setActiveClass} to="/crearperfil">
                  Crear Perfil
              </NavLink>
              <NavLink id="main-nav" className={setActiveClass} to="/crearpropuesta">
                  Crear Propuesta
              </NavLink>
              <NavLink  id="main-nav" className={setActiveClass} to="/abonarpropuesta">
                  Abonar Propuesta
              </NavLink>


            </Nav>
      </Navbar>

    );
} 