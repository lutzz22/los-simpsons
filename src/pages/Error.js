import React from "react";
import './styles/error.css'

const Error = () => {
  return (
    <>
        <div id="error" className="container"> 
            <p className="error"> ERROR 404!! </p>
            <p className="no-encontrado"> Pagina no encontrada  </p>
        </div>
    </>
  )
}

export default Error