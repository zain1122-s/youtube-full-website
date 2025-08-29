import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./channel.css";

function Channel({ sideNavbar, setSideNavbar }) {
  const { channelName } = useParams();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSideNavbar(!sideNavbar);
  };

  const handleVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };

  // Mock channel data - in a real app, this would come from an API
  const channelData = {
    name: channelName || "Code with Shahzain",
    subscribers: "2.17k",
    description: "Learn programming with easy-to-follow tutorials and projects.",
    banner: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    logo: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
    videos: [
      {
        id: 1,
        thumbnail: "https://i.pinimg.com/736x/dd/72/f0/dd72f0f3f127682c0b71539395ebaa74.jpg",
        title: "Learn React in 10 Minutes",
        views: "120K views",
        date: "2 days ago"
      },
      {
        id: 2,
        thumbnail: "https://i.pinimg.com/1200x/c6/90/4d/c6904de267778a2864debb5e4b41d85e.jpg",
        title: "JavaScript Arrays Explained",
        views: "90K views",
        date: "1 week ago"
      },
      {
        id: 3,
        thumbnail: "https://i.pinimg.com/736x/b3/a3/de/b3a3decf05cc52ec1c535087c28c9321.jpg",
        title: "CSS Grid Crash Course",
        views: "150K views",
        date: "3 days ago"
      }
    ]
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <div className={`hamburger-menu ${sideNavbar ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <span>☰</span>
      </div>

      {/* Sidebar */}
      {sideNavbar && (
        <div className="side-navbar">
          <div className="first-section">
            <div className="home-sidenavbartopoption">
              <span className="icon">🏠</span>
              <span className="label">Home</span>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">📺</span>
              <span className="label">Shorts</span>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">📱</span>
              <span className="label">Subscriptions</span>
            </div>
            <div className="line"></div>
          </div>

          <div className="second-navbar">
            <div className="home-sidenavbartopoption">
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "700" }}>You</div>
              <span>▶</span>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">👤</span>
              <div className="home-sidenavbartopoptiontitle">Your Channel</div>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">🕒</span>
              <div className="home-sidenavbartopoptiontitle">History</div>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">➕</span>
              <div className="home-sidenavbartopoptiontitle">Playlists</div>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">🎥</span>
              <div className="home-sidenavbartopoptiontitle">Your videos</div>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">⏰</span>
              <div className="home-sidenavbartopoptiontitle">Watch later</div>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">👍</span>
              <div className="home-sidenavbartopoptiontitle">Liked video</div>
            </div>
            <div className="home-sidenavbartopoption">
              <span className="icon">⬇</span>
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

      <div className={`channel-main ${sideNavbar ? 'sidebar-open' : ''}`}>
        {/* Channel Header */}
        <div className="channel-header">
          <img src={channelData.banner} alt="Channel Banner" className="channel-banner" />
          <div className="channel-banner-overlay"></div>
          <div className="channel-info-section">
            <img src={channelData.logo} alt="Channel Logo" className="channel-logo" />
            <div className="channel-details">
              <h1 className="channel-name">{channelData.name}</h1>
              <p className="channel-stats">{channelData.subscribers} subscribers</p>
              <p className="channel-description">{channelData.description}</p>
              <button className="subscribe-btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Channel Videos */}
        <div className="channel-videos">
          <h2>Videos</h2>
          <div className="videos-grid">
            {channelData.videos.map(video => (
              <div
                className="video-card"
                key={video.id}
                onClick={() => handleVideoClick(video.id)}
                style={{ cursor: 'pointer' }}
              >
                <img src={video.thumbnail} alt={video.title} className="thumbnail" />
                <div className="video-info">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-meta">{video.views} • {video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Channel;