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
import Error from './pages/Error';

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Carrousel />}/>
        <Route path='/inicio' element={<Carrousel />}> </Route>
        <Route path='/blog' element={<Blog />}> </Route>
        <Route path='/personajes' element={<Personajes />}></Route>
        <Route path='/contacto' element={<Form />}></Route>
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;


