import React from 'react'
import maggie from '../img/maggie.jpg'
import homero from '../img/homer.jpg'
import bart from '../img/bart.jpg'

const Personajes = () => {
  return (
    <>
      <div className="container-fluid" style={{backgroundColor: "rgb(255, 188, 5)"}}>
        <div className="row pt-5 py-5">
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={maggie} className="card-img-top" alt="maggie de los simpsons"/>
                <div className="card-body">
                  <h5 className="card-title">Maggie</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="btn btn-danger">Leer más...</a>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={homero} className="card-img-top" alt="homero de los simpsons"/>
                <div className="card-body">
                  <h5 className="card-title">Homero</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="btn btn-danger">Leer más...</a>
                </div>
              </div>
          </div>
          <div className="col-lg-4 col-sm-12 d-flex justify-content-center">
            <div className="card" style={{width: "18rem"}}>
                <img src={bart} className="card-img-top" alt="Bart de los simpsons"/>
                <div className="card-body">
                  <h5 className="card-title">Bart</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="." className="btn btn-danger">Leer más...</a>
                </div>
              </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default Personajes