import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
import { FaYoutube } from "react-icons/fa";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications"; // spelling was wrong
import PersonIcon from "@mui/icons-material/Person";

const Navbar = ({setSideNavabar,sideNavbar}) => {
  const navigate = useNavigate();
  const [userPic, setUserPic] = useState(
    "https://t4.ftcdn.net/jpg/07/88/67/21/360_F_788672190_maGwfDtey1ep9BqZsLO9f6LaUkIBMNt1.jpg"
  );
  const [navbarModel, setnavbarModel] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClickModel = () => {
    setnavbarModel((prev) => !prev);
  };

  const togglebutton = () => {
    setSideNavabar(!sideNavbar)
  }

  const handleLogoClick = () => {
    navigate('/');
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log('Searching for:', searchQuery);
      // For now, just clear the search
      setSearchQuery("");
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  }
 

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={togglebutton} >
          <MenuIcon sx={{ fontSize: "40px", color: "white" }} />
        </div>
        <div className="navbar-youtube" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <FaYoutube size={41} style={{ color: "red" }} />
          <div className="navbar-utubetitle">YouTube</div>
        </div>
      </div>

      <div className="navbar-middle">
        <form className="navbar-searchbox" onSubmit={handleSearch}>
          <input
            type="text"
            className="searchbox"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </form>
        <div className="navbar-searchiconbox" onClick={handleSearch}>
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
        <NotificationsIcon
          sx={{ fontSize: "30px", cursor: "pointer", color: "white" }}
        />
        {/* <PersonIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} /> */}

        <img
          onClick={handleClickModel}
          className="navbar-right-logo"
          src={userPic}
          alt="logo"
        />

        {navbarModel && (
          <div className="navbar-model">
            <div className="navbar-model-option">Profile</div>
            <div className="navbar-model-option">Logout</div>
            <div className="navbar-model-option">Login</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
