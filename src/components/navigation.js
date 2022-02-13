import { NavLink } from "react-router-dom";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

//links to Social Media
const socialLinks = [
  {
    id: 1,
    linkTo: "Facebook",
    zheLink: "https://www.facebook.com/theweeknd",
  },
  {
    id: 2,
    linkTo: "Instagram",
    zheLink: "https://www.instagram.com/theweeknd/",
  },
  {
    id: 3,
    linkTo: "Twitter",
    zheLink: "https://twitter.com/TheWeeknd",
  },
];

//links to listening platforms
const musicLinks = [
  {
    id: 1,
    linkTo: "SoundCloud",
    zheLink: "https://soundcloud.com/theweeknd",
  },
  {
    id: 2,
    linkTo: "Apple Music",
    zheLink: "https://music.apple.com/us/artist/the-weeknd/479756766",
  },
  {
    id: 3,
    linkTo: "Spotify",
    zheLink: "https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ",
  },
  {
    id: 4,
    linkTo: "Youtube",
    zheLink: "https://www.youtube.com/user/TheWeekndVEVO",
  },
];

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <a href="https://www.theweeknd.com/">Official Site</a>
              </li>
              <li>
                <NavLink exact to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <a href="https://www.theweeknd.com/news">News</a>
              </li>
              <li>
                <a href="https://www.theweeknd.com/tour">Tour</a>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Explore </div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">
                  Hear <RightArrow />
                </li>
                {musicLinks.map((music) => (
                  <li key={music.id}>
                    <a href={music.zheLink}>{music.linkTo}</a>
                  </li>
                ))}
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">
                  Follow <RightArrow />
                </li>

                {socialLinks.map((social) => (
                  <li key={social.id}>
                    <a href={social.zheLink}>{social.linkTo}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
