import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Shop from './Pages/Shop/Shop'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Shop' element={<Shop />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  </>
}

export default App


