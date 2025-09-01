import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./shorts.css";
import MenuIcon from "@mui/icons-material/Menu";
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
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";

function Shorts({ sideNavbar, setSideNavbar }) {
  const navigate = useNavigate();
  const [currentShortIndex, setCurrentShortIndex] = useState(0);

  const toggleSidebar = () => {
    setSideNavbar(!sideNavbar);
  };

  const handleShortNavigation = (direction) => {
    if (direction === 'next' && currentShortIndex < shortsData.length - 1) {
      setCurrentShortIndex(currentShortIndex + 1);
    } else if (direction === 'prev' && currentShortIndex > 0) {
      setCurrentShortIndex(currentShortIndex - 1);
    }
  };

  const handleLike = (index) => {
    const updatedShorts = [...shortsData];
    updatedShorts[index].isLiked = !updatedShorts[index].isLiked;
    if (updatedShorts[index].isLiked) {
      updatedShorts[index].likes += 1;
      if (updatedShorts[index].isDisliked) {
        updatedShorts[index].isDisliked = false;
        updatedShorts[index].dislikes -= 1;
      }
    } else {
      updatedShorts[index].likes -= 1;
    }
    // In a real app, you'd update the state properly
  };

  const handleDislike = (index) => {
    const updatedShorts = [...shortsData];
    updatedShorts[index].isDisliked = !updatedShorts[index].isDisliked;
    if (updatedShorts[index].isDisliked) {
      updatedShorts[index].dislikes += 1;
      if (updatedShorts[index].isLiked) {
        updatedShorts[index].isLiked = false;
        updatedShorts[index].likes -= 1;
      }
    } else {
      updatedShorts[index].dislikes -= 1;
    }
    // In a real app, you'd update the state properly
  };

  const handleShare = (short) => {
    if (navigator.share) {
      navigator.share({
        title: short.title,
        text: `Check out this short: ${short.title}`,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const shortsData = [
    {
      id: 1,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      title: "Amazing Nature Scene",
      channel: "Nature Lovers",
      channelImg: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
      likes: 1250,
      dislikes: 23,
      comments: 89,
      isLiked: false,
      isDisliked: false
    },
    {
      id: 2,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      title: "Quick Cooking Hack",
      channel: "Chef Master",
      channelImg: "https://i.pinimg.com/736x/d8/eb/85/d8eb854854153c8b4afe758d87828731.jpg",
      likes: 890,
      dislikes: 12,
      comments: 45,
      isLiked: false,
      isDisliked: false
    },
    {
      id: 3,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Funny Pet Moments",
      channel: "Pet Lovers",
      channelImg: "https://i.pinimg.com/736x/3a/bb/40/3abb408279ad7288462ada2e213b2e49.jpg",
      likes: 2100,
      dislikes: 45,
      comments: 156,
      isLiked: false,
      isDisliked: false
    },
    {
      id: 4,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Tech Review in 30s",
      channel: "Tech Guru",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      likes: 750,
      dislikes: 8,
      comments: 67,
      isLiked: false,
      isDisliked: false
    },
    {
      id: 5,
      video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      title: "Dance Challenge",
      channel: "Dance Studio",
      channelImg: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
      likes: 3200,
      dislikes: 67,
      comments: 234,
      isLiked: false,
      isDisliked: false
    }
  ];

  const currentShort = shortsData[currentShortIndex];

  return (
    <>
      {/* Hamburger Menu Button */}
      <div className={`hamburger-menu ${sideNavbar ? 'hidden' : ''}`} onClick={toggleSidebar}>
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
            <div className="home-sidenavbartopoption active" onClick={() => navigate('/shorts')} style={{ cursor: 'pointer' }}>
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
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "700" }}>You</div>
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
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "600" }}>Subscriptions</div>
            </div>
          </div>
        </div>
      )}

      {/* Shorts Container */}
      <div className={`shorts-container ${sideNavbar ? 'sidebar-open' : ''}`}>
        <div className="shorts-player">
          {/* Navigation Arrows */}
          <div className="shorts-navigation">
            <button
              className="nav-arrow prev"
              onClick={() => handleShortNavigation('prev')}
              disabled={currentShortIndex === 0}
            >
              ▲
            </button>
            <button
              className="nav-arrow next"
              onClick={() => handleShortNavigation('next')}
              disabled={currentShortIndex === shortsData.length - 1}
            >
              ▼
            </button>
          </div>

          {/* Video Player */}
          <div className="short-video-wrapper">
            <video
              className="short-video"
              src={currentShort.video}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Video Info Overlay */}
            <div className="short-info">
              <div className="short-title">{currentShort.title}</div>
              <div className="short-channel">
                <img src={currentShort.channelImg} alt={currentShort.channel} />
                <span>{currentShort.channel}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="short-actions">
              <button
                className={`action-btn like ${currentShort.isLiked ? 'active' : ''}`}
                onClick={() => handleLike(currentShortIndex)}
              >
                <ThumbUpIcon />
                <span>{currentShort.likes.toLocaleString()}</span>
              </button>

              <button
                className={`action-btn dislike ${currentShort.isDisliked ? 'active' : ''}`}
                onClick={() => handleDislike(currentShortIndex)}
              >
                <ThumbDownIcon />
                <span>{currentShort.dislikes.toLocaleString()}</span>
              </button>

              <button
                className="action-btn share"
                onClick={() => handleShare(currentShort)}
              >
                <ShareIcon />
                <span>Share</span>
              </button>

              <button className="action-btn comment">
                <CommentIcon />
                <span>{currentShort.comments}</span>
              </button>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="shorts-progress">
            {shortsData.map((_, index) => (
              <div
                key={index}
                className={`progress-bar ${index === currentShortIndex ? 'active' : ''} ${index < currentShortIndex ? 'completed' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shorts;