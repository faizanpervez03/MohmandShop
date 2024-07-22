import { useState } from 'react'
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





function App() {
  const [count, setCount] = useState(0)

  return <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/Home' element={<Home />}></Route> */}
        <Route path='/About' element={<About />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
        <Route path='/ProductDetail' element={<ProductDetail />} ></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/Checkout' element={<Checkout />}></Route>
        <Route path='/Thankyou' element={<Thankyou />}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>


  </>
}

export default App


