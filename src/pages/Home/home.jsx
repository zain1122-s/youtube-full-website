import React from 'react'
import "./home.css"
import Homepage from '../../component/HomePage/homepage'
import Sidenavabar from '../../component/SideNavbar/sidenavabar'
function Home({sideNavbar}) {
  return (
    <div >
      <div className="home">
        <Sidenavabar sideNavbar={sideNavbar} />
        <Homepage sideNavbar={sideNavbar}/>
        
      </div>
    </div>
  )
}

export default Home
