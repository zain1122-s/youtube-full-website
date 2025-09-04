 import './App.css'
 import Navbar from './component/Navbar/navbar.jsx'
 import { useState } from 'react'
 import Homepage from './component/homepage/homepage.jsx'
 import {Route,Routes} from 'react-router-dom'
 import Video from './component/video/video.jsx'
 import Channel from './component/channel/channel.jsx'
 import Shorts from './component/shorts/shorts.jsx'
 import { SubscriptionProvider } from './context/SubscriptionContext'
function App() {


const [sideNavbar,setSideNavabar]=useState(true)

const setSideNavbarFunc=(value)=>{
 setSideNavabar(value)

}



return (
     <SubscriptionProvider>
       <div className='App'>
         <Navbar setSideNavabar={setSideNavabar}  sideNavbar={sideNavbar} />

         <Routes>
            <Route path='/' element={<Homepage sideNavbar={sideNavbar} setSideNavbar={setSideNavabar}/>} />
            <Route path='/watch/:id' element={<Video sideNavbar={sideNavbar} setSideNavbar={setSideNavabar}/>} />
            <Route path='/channel/:channelName' element={<Channel sideNavbar={sideNavbar} setSideNavbar={setSideNavabar}/>} />
            <Route path='/shorts' element={<Shorts sideNavbar={sideNavbar} setSideNavbar={setSideNavabar}/>} />
         </Routes>

       </div>
     </SubscriptionProvider>
  )
}

export default App
