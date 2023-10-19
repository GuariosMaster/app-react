import React from 'react';

const NavBar = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container">
            <a className="navbar-brand" href="/">Mi Aplicación</a>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/tareas">Tareas</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/contacto">Contacto</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  );
};

export default NavBar;