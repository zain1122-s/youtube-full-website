 import './App.css'
 import Navbar from './component/Navbar/navbar'
 import { useState } from 'react'
 import Homepage from './component/homepage/homepage'
 import {Route,Routes} from 'react-router-dom'
 import Video from './component/video/video'
 import Channel from './component/channel/channel'
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
      <Route path='/watch/:id' element={<Video sideNavbar={sideNavbar} setSideNavbar={setSideNavabar}/>} />
      <Route path='/channel/:channelName' element={<Channel sideNavbar={sideNavbar} setSideNavbar={setSideNavabar}/>} />
    </Routes>
 
    </div>
  )
}

export default App
