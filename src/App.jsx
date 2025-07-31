 import './App.css'
import Navbar from './component/Navbar/navbar'
import Home from './pages/Home/home'
import { useState } from 'react'


function App() {
const [sideNavbar, setSideNavbar] = useState(true);

const setsideNavbarFunc=(value)=>{
setSideNavbar(value)
}

  return (
    <div className='App'>
    <Navbar sideNavbar={sideNavbar} setsideNavbarFunc={setsideNavbarFunc} />
     <Home sideNavbar={sideNavbar}/>
    </div>
  )
}

export default App
