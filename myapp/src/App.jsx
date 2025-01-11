import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Invest from './Components/Invest'
import About from './Components/About'
import List from './Components/List'
import Navbar from  './Components/Navbar'
import Home from './Components/Home'
import Trade from './Components/Trade'
import Regulation from './Components/Regulation'
import {Route,Routes,Navigate} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to ="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/regulation" element={<Regulation />} />

        </Routes>
      </div>
        
    </>
  )
}

export default App
