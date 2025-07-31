import React from "react";
import "./homepage.css";

function Homepage({ sideNavbar }) {
  const options = [
    "All",
    "Web Development",
    "Coding",
    "Teaching",
    "Freelancing",
    "UX/UI",
    "Cricket",
    "Sports",
    "Football",
    "Google",
    "Live",
    "Democracy",
    "comdey",
    "Cricket",
    "Sports",
    "Football",
    "Google",
    "Live",
    "Democracy",
    "comdey",
  ];

  return (
    <div className={sideNavbar ? "homepage" : "fullhomepage"}>
      <div className="homepage-options">
        {options.map((item, index) => {
          return (
            <div key={index} className="homepage-option">
              {item}
            </div>
          );
        })}
      </div>

      <div className={sideNavbar? "home-mainpage": "home-mainpagewithoutlinlk"}>
        <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>
         <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>

         <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>

         <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>

         <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>

         <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>
        
         <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>
        <div className="youtube-video">
          <div className="youtube-thumbnailbox">
            <img
              src="https://i.pinimg.com/736x/f7/68/1f/f7681ff2f724352a71d1d3266c8cdd11.jpg"
              alt="error"
              className="picthumbnail"
            />
            <div className="youtube-timingthumbnail">28:05</div>
          </div>
          <div className="youtubetitlebox">
            <div className="youtubetitleboxprofile">
              <img className="profile" src="https://i.pinimg.com/736x/fd/79/c4/fd79c47a422253e0f33a4d11974b9ca2.jpg" alt="" />
            </div>
            <div className="youtubetitlebox-title">
              <div className="youube-videotitle">user 1</div>
                 <div className="youube-channelname">guru g</div>
                 <div className="youtube-likes">3 likes</div>

            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Homepage;
