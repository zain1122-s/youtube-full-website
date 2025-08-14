 import './App.css'
import Navbar from './component/Navbar/navbar'
import { useState } from 'react'
import Homepage from './component/HomePage/homepage'
import {Route,Routes} from 'react-router-dom'

function App() {


const [sideNavbar,setSideNavabar]=useState(true)

const setSideNavbarFunc=(value)=>{
  setSideNavabar(value)
  
}



return (
    <div className='App'>
    <Navbar setSideNavabar={setSideNavabar}  sideNavbar={sideNavbar} />
    <Routes>
      <Route path='/' element={<Homepage sideNavbar={sideNavbar}/>}/>
    </Routes>

    </div>
  )
}

export default App
