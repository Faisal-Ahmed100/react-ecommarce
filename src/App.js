import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import Header from './pages/Header';
import Footer from './pages/Footer';
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App