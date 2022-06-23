import React from 'react'
import './styles/form.css'

const Form = () => {
  return (
   
    <div className='form'>
        <form>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo Electronico</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="juancito@tumail.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" cols="50"></textarea>
            </div>
            <button type="button" className="btn btn-outline-danger">ENVIAR</button>
        </form>
    </div>
    
  )
}

export default Form