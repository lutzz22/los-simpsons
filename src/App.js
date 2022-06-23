import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/navbar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';
import Personajes from './pages/Personajes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Blog from './pages/Blog';
import Form from './pages/Form';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Carrousel/>
//       <Personajes />
//       <Blog />
//       <Form />
//       <Footer />
//     </>
//   );
// }

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/inicio' element={<Carrousel />}> </Route>
        <Route path='/blog' element={<Blog />}> </Route>
        <Route path='/personajes' element={<Personajes />}></Route>
        <Route path='/contacto' element={<Form />}></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;


