import React from 'react'
import imagen3 from "../img/carrousel-3.jpg"

const Carrousel = () => {
  return (
    <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={imagen3} className="d-block w-100 h-100" alt="..."/>
                </div>
            </div>
    </div>
    </>
  )
}

export default Carrousel