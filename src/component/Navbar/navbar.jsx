import React, { useState } from "react";
import "./navbar.css";
// import { CiMenuBurger } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotficationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import Sidenavabar from "../SideNavbar/sidenavabar";
const Navbar = () => {
  const [userPic, setUserPic] = useState(
    "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg"
  );
  const [navbarModel, setnavbarModel] = useState(false);

  const handleClickModel = () => {
    setnavbarModel((prev) => !prev);
  };

 
  return (

    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHamberger" >
          <MenuIcon  sx={{fontSize:"40px",color:"white"}}/>
        </div>
        <div className="navbar-youtube">
          <FaYoutube size={41} style={{ color: "red" }} />
          <div className="navbar-utubetitle">YouTube</div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="navbar-searchbox">
          <input type="text" className="searchbox" placeholder="search" />
        </div>
        <div className="navbar-searchiconbox">
          <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
        </div>
        <div className="navbar-mike">
          <KeyboardVoiceIcon sx={{ color: "white", fontSize: "28px" }} />
        </div>
      </div>

      <div className="navbar-right">
        <VideoCallIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        <NotficationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        {/* <PersonIcon sx={{fontSize:"30px", cursor:"pointer", color:"white"}}/>
         */}

        <img
          onClick={handleClickModel}
          className="navbar-right-logo"
          src={userPic}
          alt="logo"
        />

        {navbarModel && (
          <div className="navbar-model">
            <div className="navbar-model-option">Profile </div>
            <div className="navbar-model-option">Logout </div>
            <div className="navbar-model-option">Login</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

 
