import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Shop from './Pages/Shop/Shop'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Cart from './Pages/Cart/Cart'
import Checkout from './Pages/Checkout/Checkout'
import Thankyou from './Pages/Thankyou/Thankyou'
import ProductDetail from './components/ProductDetail/ProductDetail'
import Product from './components/Product/Product'
import ContactUs from './Pages/ContactUs/ContactUs'

function App() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || 0
  );

  
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} /> 
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Shop' element={<Shop />}></Route>
          <Route path='/ContactUs' element={<ContactUs />}></Route>
          <Route path='/ProductDetail/:id' element={<ProductDetail setCartItems={setCartItems} />} />
          {/* <Route path='/ProductDetail' element={<ProductDetail setCartItems={setCartItems} />} /> */}
          <Route path='/Cart' element={<Cart  />}></Route>
          <Route path='/Checkout' element={<Checkout />}></Route>
          <Route path='/Thankyou' element={<Thankyou />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
