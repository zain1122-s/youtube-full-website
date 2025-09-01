import React from "react";
import { useNavigate } from "react-router-dom";
import './homepage.css'
import HomeIcon from "@mui/icons-material/Home";
import VideocamIcon from "@mui/icons-material/Videocam";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HistoryIcon from "@mui/icons-material/History";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import DownloadIcon from "@mui/icons-material/Download";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { useSubscriptions } from "../../context/SubscriptionContext";
import MenuIcon from "@mui/icons-material/Menu";

function Homepage({ sideNavbar, setSideNavbar }) {
  const navigate = useNavigate();
  const { subscriptions } = useSubscriptions();

  const handleChannelClick = (channelName) => {
    navigate(`/channel/${encodeURIComponent(channelName)}`);
  };

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };


  const videos = [
    {
      id: 1,
      thumbnail: "https://i.pinimg.com/736x/dd/72/f0/dd72f0f3f127682c0b71539395ebaa74.jpg",
      title: "Learn React in 10 Minutes",
      channel: "Code with Shahzain",
      channelImg: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
      views: "120K views",
      date: "2 days ago",
      duration: "10:32"
    },
    {
      id: 2,
      thumbnail: "https://i.pinimg.com/1200x/c6/90/4d/c6904de267778a2864debb5e4b41d85e.jpg",
      title: "JavaScript Arrays Explained",
      channel: "JS Mastery",
      channelImg: "https://i.pinimg.com/736x/d8/eb/85/d8eb854854153c8b4afe758d87828731.jpg",
      views: "90K views",
      date: "1 week ago",
      duration: "15:45"
    },
    {
      id: 3,
      thumbnail: "https://i.pinimg.com/736x/b3/a3/de/b3a3decf05cc52ec1c535087c28c9321.jpg",
      title: "CSS Grid Crash Course",
      channel: "Frontend Dev",
      channelImg: "https://i.pinimg.com/736x/3a/bb/40/3abb408279ad7288462ada2e213b2e49.jpg",
      views: "150K views",
      date: "3 days ago",
      duration: "22:18"
    },
    {
      id: 4,
      thumbnail: "https://i.pinimg.com/736x/41/eb/7e/41eb7ef609f11357fdcbdfa7c042c774.jpg",
      title: "Advanced JavaScript Concepts",
      channel: "JS Mastery",
      channelImg: "https://i.pinimg.com/736x/d8/eb/85/d8eb854854153c8b4afe758d87828731.jpg",
      views: "200K views",
      date: "1 week ago",
      duration: "18:30"
    },
    {
      id: 5,
      thumbnail: "https://i.pinimg.com/736x/4e/55/7d/4e557dd9587c57d158cc4c59fd4cae3b.jpg",
      title: "React State Management",
      channel: "React Pro",
      channelImg: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
      views: "180K views",
      date: "5 days ago",
      duration: "12:45"
    },
    {
      id: 6,
      thumbnail: "https://i.pinimg.com/736x/61/9d/58/619d5869ac1fd6513d9a9a3ab645636e.jpg",
      title: "Node.js Backend Development",
      channel: "Backend Guru",
      channelImg: "https://i.pinimg.com/736x/3a/bb/40/3abb408279ad7288462ada2e213b2e49.jpg",
      views: "120K views",
      date: "2 days ago",
      duration: "25:12"
    },
    {
      id: 7,
      thumbnail: "https://i.pinimg.com/736x/f9/41/d2/f941d2b6c43721c2ea33bd15bad7dcb9.jpg",
      title: "Python for Beginners",
      channel: "Code Academy",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "300K views",
      date: "1 day ago",
      duration: "35:12"
    },
    {
      id: 8,
      thumbnail: "https://i.pinimg.com/736x/cf/de/41/cfde41de197448b27e3a9c1b29ae6974.jpg",
      title: "Amazing Street Food Tour",
      channel: "Food Adventures",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "150K views",
      date: "3 days ago",
      duration: "5:20"
    },
    {
      id: 9,
      thumbnail: "https://i.pinimg.com/736x/bb/19/0e/bb190e491ad53856e8a7e7eb21377a9e.jpg",
      title: "Machine Learning Basics",
      channel: "AI Explained",
      channelImg: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
      views: "250K views",
      date: "4 days ago",
      duration: "28:45"
    },
    {
      id: 10,
      thumbnail: "https://i.pinimg.com/736x/d0/91/34/d091343312b63042703369b544866ead.jpg",
      title: "Photography Tips for Beginners",
      channel: "Photo Pro",
      channelImg: "https://i.pinimg.com/736x/d8/eb/85/d8eb854854153c8b4afe758d87828731.jpg",
      views: "95K views",
      date: "6 days ago",
      duration: "16:30"
    }
  ];

  return (
    <>
      {/* Hamburger Menu Button - only show when sidebar is closed */}
      <div className={`hamburger-menu ${sideNavbar ? 'hidden' : ''}`} onClick={() => setSideNavbar(!sideNavbar)}>
        <MenuIcon />
      </div>

      {/* Sidebar */}
      {sideNavbar && (
        <div className="side-navbar">
          <div className="first-section">
            <div className="home-sidenavbartopoption" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
              <HomeIcon className="icon" />
              <span className="label">Home</span>
            </div>
            <div className="home-sidenavbartopoption" onClick={() => navigate('/shorts')} style={{ cursor: 'pointer' }}>
              <VideocamIcon className="icon" />
              <span className="label">Shorts</span>
            </div>
            <div className="home-sidenavbartopoption" onClick={() => navigate('/subscriptions')} style={{ cursor: 'pointer' }}>
              <SubscriptionsIcon className="icon" />
              <span className="label">Subscriptions</span>
            </div>
            <div className="line"></div>
          </div>

          <div className="second-navbar">
            <div className="home-sidenavbartopoption">
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "700" }}>
                You
              </div>
              <ChevronRightIcon className="icon" />
            </div>
            <div className="home-sidenavbartopoption">
              <RecentActorsIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">Your Channel</div>
            </div>
            <div className="home-sidenavbartopoption">
              <HistoryIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">History</div>
            </div>
            <div className="home-sidenavbartopoption">
              <PlaylistAddIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">Playlists</div>
            </div>
            <div className="home-sidenavbartopoption">
              <SmartDisplayOutlinedIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">Your videos</div>
            </div>
            <div className="home-sidenavbartopoption">
              <WatchLaterIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">Watch later</div>
            </div>
            <div className="home-sidenavbartopoption">
              <ThumbUpAltOutlinedIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">Liked video</div>
            </div>
            <div className="home-sidenavbartopoption">
              <DownloadIcon className="icon" />
              <div className="home-sidenavbartopoptiontitle">Download</div>
            </div>
            <div className="line-2"></div>
          </div>

          <div className="home-sidenavbarbottom">
            <div className="subscription">
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "600" }}>
                Subscriptions
              </div>
            </div>

            {subscriptions.map(subscription => (
              <div
                key={subscription.id}
                className="home-navbartopoption"
                onClick={() => handleChannelClick(subscription.name)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  className="channellogo"
                  src={subscription.logo}
                  alt={subscription.name}
                />
                <div className="home-navbartopoptiontitle">{subscription.name}</div>
              </div>
            ))}

            {/* Default channels if no subscriptions */}
            {subscriptions.length === 0 && (
              <>
                <div className="home-navbartopoption" onClick={() => handleChannelClick("Mister Beast")} style={{ cursor: 'pointer' }}>
                  <img
                    className="channellogo"
                    src="https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg"
                    alt="Mister Beast"
                  />
                  <div className="home-navbartopoptiontitle">Mister Beast</div>
                </div>

                <div className="home-navbartopoption" onClick={() => handleChannelClick("Code with Shahzain")} style={{ cursor: 'pointer' }}>
                  <img
                    className="channellogo"
                    src="https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg"
                    alt="Code with Shahzain"
                  />
                  <div className="home-navbartopoptiontitle">Code with Shahzain</div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <div className={`homepage ${sideNavbar ? 'sidebar-open' : ''}`}>
        <div className="videos-grid">
          {videos.map(video => (
            <div className="video-card" key={video.id} onClick={() => handleVideoClick(video.id)} style={{cursor: 'pointer'}}>
              <div className="thumbnail-container">
                <img className="thumbnail" src={video.thumbnail} alt={video.title} />
                <div className="duration-overlay">{video.duration}</div>
              </div>
              <div className="video-info" >
                <img className="channel-img" src={video.channelImg} alt={video.channel} />
                <div className="video-text">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="channel-name">{video.channel}</p>
                  <p className="video-meta">{video.views} • {video.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Homepage;
