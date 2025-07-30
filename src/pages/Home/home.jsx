import React from 'react'
import "./home.css"
import Homepage from '../../component/HomePage/homepage'
import Sidenavabar from '../../component/SideNavbar/sidenavabar'
function Home() {
  return (
    <div >
      <div className="home">
        <Sidenavabar />
        <Homepage/>
        
      </div>
    </div>
  )
}

export default Home
