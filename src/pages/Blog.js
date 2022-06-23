import React from 'react'
import img1 from '../img/blog1.jpg';
import img2 from '../img/blog2.jpg'
import './styles/blog.css'

const Blog = () => {
  return (
    < >
      <div id='blog'>
          <div id='contenedor' className='container'>
              <h2> Episodio "Especial Noche de Brujas VII." Octubre 31, 1996</h2>
              <img src={img1} />
              <p> Bart descubre que tiene un gemelo malvado, que vive en el ático de su casa. Lisa crea su propio mundo en miniatura y Ciudadano Kang - Kang y Kodos se hacen pasar por los candidatos presidenciales Bill Clinton y Bob Dole para invadir la Tierra. </p>
          
          
              <h2> Episodio "Lucha educativa". Abril 16,1995</h2>
              <img src={img2} />
              <p> La Sra. Krabappel se une a los maestros en una huelga contra el director Skinner, la escuela queda sin maestros, por lo que el pueblo de Springfield decide contratar a personas comunes como substitutos. Marge se convierte en maestra.</p>
          </div>
      </div>
    </>
  )
}

export default Blog