import React from "react";
import imagen from '../img/header-simpsons.gif'
import { Link } from 'react-router-dom'
import Carrousel from "./Carrousel";

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={imagen} alt=""/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/inicio'>Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/personajes'>Personajes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/blog'>Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contacto'>Contacto</Link>
                        </li>
                        
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-danger" type="submit">Busqueda</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar