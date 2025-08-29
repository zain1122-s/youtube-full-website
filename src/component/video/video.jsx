import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./video.css";
import { MdOutlineThumbUp, MdOutlineThumbDownOffAlt } from "react-icons/md";
import { PiShareFatThin } from "react-icons/pi";
import { GiSaveArrow } from "react-icons/gi";
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

function Video({ sideNavbar, setSideNavbar }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: "Ali",
      text: "Great tutorial! Learned React basics fast 🚀"
    },
    {
      id: 2,
      user: "Sara",
      text: "Can you make a detailed project video?"
    }
  ]);

  const toggleSidebar = () => {
    setSideNavbar(!sideNavbar);
  };

  const handleLike = () => {
    if (!isLiked) {
      setLikeCount(prev => prev + 1);
      setIsLiked(true);
    } else {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    }
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: "You",
        text: comment.trim()
      };
      setComments(prev => [...prev, newComment]);
      setComment("");
    }
  };

  const handleSuggestedVideoClick = (videoId) => {
    navigate(`/watch/${videoId}`);
  };

  const handleChannelClick = (channelName) => {
    navigate(`/channel/${encodeURIComponent(channelName)}`);
  };

  const videos = [
    {
      id: 1,
      thumbnail: "https://i.pinimg.com/736x/dd/72/f0/dd72f0f3f127682c0b71539395ebaa74.jpg",
      title: "Learn React in 10 Minutes",
      channel: "Code with Shahzain",
      channelImg: "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg",
      views: "120K views",
      date: "2 days ago"
    },
    {
      id: 2,
      thumbnail: "https://i.pinimg.com/1200x/c6/90/4d/c6904de267778a2864debb5e4b41d85e.jpg",
      title: "JavaScript Arrays Explained",
      channel: "JS Mastery",
      channelImg: "https://i.pinimg.com/736x/d8/eb/85/d8eb854854153c8b4afe758d87828731.jpg",
      views: "90K views",
      date: "1 week ago"
    },
    {
      id: 3,
      thumbnail: "https://i.pinimg.com/736x/b3/a3/de/b3a3decf05cc52ec1c535087c28c9321.jpg",
      title: "CSS Grid Crash Course",
      channel: "Frontend Dev",
      channelImg: "https://i.pinimg.com/736x/3a/bb/40/3abb408279ad7288462ada2e213b2e49.jpg",
      views: "150K views",
      date: "3 days ago"
    },
    {
      id: 4,
      thumbnail: "https://i.pinimg.com/736x/41/eb/7e/41eb7ef609f11357fdcbdfa7c042c774.jpg",
      title: "CSS Grid Crash Course",
      channel: "Frontend Dev",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "150K views",
      date: "3 days ago"
    },
    {
      id: 5,
      thumbnail: "https://i.pinimg.com/736x/4e/55/7d/4e557dd9587c57d158cc4c59fd4cae3b.jpg",
      title: "CSS Grid Crash Course",
      channel: "Frontend Dev",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "150K views",
      date: "3 days ago"
    },
    {
      id: 6,
      thumbnail: "https://i.pinimg.com/736x/61/9d/58/619d5869ac1fd6513d9a9a3ab645636e.jpg",
      title: "CSS Grid Crash Course",
      channel: "Frontend Dev",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "150K views",
      date: "3 days ago"
    },
    {
      id: 7,
      thumbnail: "https://i.pinimg.com/736x/f9/41/d2/f941d2b6c43721c2ea33bd15bad7dcb9.jpg",
      title: "CSS Grid Crash Course",
      channel: "Frontend Dev",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "150K views",
      date: "3 days ago"
    },
    {
      id: 8,
      thumbnail: "https://i.pinimg.com/736x/cf/de/41/cfde41de197448b27e3a9c1b29ae6974.jpg",
      title: "CAUGHT CRIMINAL",
      channel: "CRIME",
      channelImg: "https://i.pinimg.com/736x/ec/bd/19/ecbd19ac373a6421fbdbed62e49df4d1.jpg",
      views: "150K views",
      date: "3 days ago"
    }
  ];

  const currentVideo = videos.find(video => video.id === parseInt(id));

  const suggestedVideos = [
    {
      id: 9,
      thumbnail: "https://i.pinimg.com/736x/b3/a3/de/b3a3decf05cc52ec1c535087c28c9321.jpg",
      title: "Master JavaScript in 20 Minutes",
      channel: "CodeMaster",
      views: "50k views",
      time: "1 year ago",
    },
    {
      id: 10,
      thumbnail: "https://i.pinimg.com/736x/bb/19/0e/bb190e491ad53856e8a7e7eb21377a9e.jpg",
      title: "React Hooks Explained",
      channel: "ReactPro",
      views: "30k views",
      time: "1 year ago",
    },
    {
      id: 11,
      thumbnail: "https://i.pinimg.com/736x/d0/91/34/d091343312b63042703369b544866ead.jpg",
      title: "CSS Flexbox Crash Course",
      channel: "DesignWorld",
      views: "20k views",
      time: "1 year ago",
    },
    {
      id: 12,
      thumbnail: "https://i.pinimg.com/736x/61/9d/58/619d5869ac1fd6513d9a9a3ab645636e.jpg",
      title: "Node.js Backend Development",
      channel: "Backend Guru",
      views: "45k views",
      time: "6 months ago",
    },
    {
      id: 13,
      thumbnail: "https://i.pinimg.com/736x/f9/41/d2/f941d2b6c43721c2ea33bd15bad7dcb9.jpg",
      title: "Python for Beginners",
      channel: "Code Academy",
      views: "80k views",
      time: "3 months ago",
    },
    {
      id: 14,
      thumbnail: "https://i.pinimg.com/736x/4e/55/7d/4e557dd9587c57d158cc4c59fd4cae3b.jpg",
      title: "React State Management",
      channel: "React Pro",
      views: "35k views",
      time: "8 months ago",
    },
    {
      id: 15,
      thumbnail: "https://i.pinimg.com/736x/41/eb/7e/41eb7ef609f11357fdcbdfa7c042c774.jpg",
      title: "Advanced JavaScript Concepts",
      channel: "JS Mastery",
      views: "60k views",
      time: "4 months ago",
    },
    {
      id: 16,
      thumbnail: "https://i.pinimg.com/736x/cf/de/41/cfde41de197448b27e3a9c1b29ae6974.jpg",
      title: "Web Development Roadmap",
      channel: "DevPath",
      views: "90k views",
      time: "2 months ago",
    }
  ];

  return (
    <>
      {/* Hamburger Menu Button - only show when sidebar is closed */}
      <div className={`hamburger-menu ${sideNavbar ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <MenuIcon />
      </div>

      {/* Sidebar */}
      {sideNavbar && (
        <div className="side-navbar">
          <div className="first-section">
            <div className="home-sidenavbartopoption">
              <HomeIcon />
              <span className="label">Home</span>
            </div>
            <div className="home-sidenavbartopoption">
              <VideocamIcon />
              <span className="label">Shorts</span>
            </div>
            <div className="home-sidenavbartopoption">
              <SubscriptionsIcon />
              <span className="label">Subscriptions</span>
            </div>
            <div className="line"></div>
          </div>

          <div className="second-navbar">
            <div className="home-sidenavbartopoption">
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "700" }}>You</div>
              <ChevronRightIcon />
            </div>
            <div className="home-sidenavbartopoption">
              <RecentActorsIcon />
              <div className="home-sidenavbartopoptiontitle">Your Channel</div>
            </div>
            <div className="home-sidenavbartopoption">
              <HistoryIcon />
              <div className="home-sidenavbartopoptiontitle">History</div>
            </div>
            <div className="home-sidenavbartopoption">
              <PlaylistAddIcon />
              <div className="home-sidenavbartopoptiontitle">Playlists</div>
            </div>
            <div className="home-sidenavbartopoption">
              <SmartDisplayOutlinedIcon />
              <div className="home-sidenavbartopoptiontitle">Your videos</div>
            </div>
            <div className="home-sidenavbartopoption">
              <WatchLaterIcon />
              <div className="home-sidenavbartopoptiontitle">Watch later</div>
            </div>
            <div className="home-sidenavbartopoption">
              <ThumbUpAltOutlinedIcon />
              <div className="home-sidenavbartopoptiontitle">Liked video</div>
            </div>
            <div className="home-sidenavbartopoption">
              <DownloadIcon />
              <div className="home-sidenavbartopoptiontitle">Download</div>
            </div>
            <div className="line-2"></div>
          </div>

          <div className="home-sidenavbarbottom">
            <div className="subscription">
              <div className="home-sidenavbartopoptiontitle" style={{ fontWeight: "600" }}>Subscriptions</div>
            </div>

            <div className="home-navbartopoption" onClick={() => handleChannelClick("Mister Beast")} style={{ cursor: 'pointer' }}>
              <img
                className="channellogo"
                src="data:image/png;base64,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"
                alt="mister beast"
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
          </div>
        </div>
      )}

      <div className={`main-screen ${sideNavbar ? 'sidebar-open' : ''}`}>
      {/* Left Section */}
      <section className="left-side">
        <div className="display-video">
          <img
            className="video-thumbnail"
            src={currentVideo?.thumbnail || "https://i.pinimg.com/736x/dd/72/f0/dd72f0f3f127682c0b71539395ebaa74.jpg"}
            alt="Video Thumbnail"
          />
          <h1 className="video-title">{currentVideo?.title || "Video not found"}</h1>
        </div>

        {/* Channel Info */}
        <div className="channel-data">
          <div className="channel-info">
            <img
              className="channel-img"
              src={currentVideo?.channelImg || "https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg"}
              alt="Channel Logo"
            />
            <div className="channel-text">
              <h3
                style={{ cursor: 'pointer', color: '#fff' }}
                onClick={() => handleChannelClick(currentVideo?.channel || "Channel")}
                onMouseEnter={(e) => e.target.style.textDecoration = 'underline'}
                onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
              >
                {currentVideo?.channel || "Channel"}
              </h3>
              <p>2.17k subscribers</p>
            </div>
            <button className="subscribe-btn">Subscribe</button>
          </div>

          {/* Action Buttons */}
          <div className="video-actions">
            <div className="like-dislike">
              <button
                className={`like-btn ${isLiked ? 'liked' : ''}`}
                onClick={handleLike}
              >
                <MdOutlineThumbUp />
                <span>{likeCount}</span>
              </button>
              <button className="dislike-btn">
                <MdOutlineThumbDownOffAlt />
              </button>
            </div>
            <button className="share-btn">
              <PiShareFatThin /> <span>Share</span>
            </button>
            <button className="save-btn">
              <GiSaveArrow /> <span>Save</span>
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="comment-section">
          <h2>Comments</h2>

          {/* Add Comment Input */}
          <div className="add-comment">
            <img
              src="https://i.pinimg.com/736x/58/41/33/5841339e80abfc98b863decb11ceffb8.jpg"
              alt="user"
              className="user-img"
            />
            <div className="input-area">
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCommentSubmit()}
              />
              <div className="comment-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setComment("")}
                  disabled={!comment.trim()}
                >
                  Cancel
                </button>
                <button
                  className="comment-btn"
                  onClick={handleCommentSubmit}
                  disabled={!comment.trim()}
                >
                  Comment
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Comments */}
          {comments.map(comment => (
            <div className="comment" key={comment.id}>
              <p>
                <strong>{comment.user}:</strong> {comment.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Right Section */}
      <aside className="right-side">
        <h2>Suggested Videos</h2>
        <div className="suggested-list">
          {suggestedVideos.map((video) => (
            <div
              className="video-card"
              key={video.id}
              onClick={() => handleSuggestedVideoClick(video.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={video.thumbnail} alt="suggested" />
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.channel}</p>
                <span>
                  {video.views} {video.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
    </>
  );
}

export default Video;
