import gsap from "gsap/all";
import { useEffect, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { closeMenu, openMenu } from "../animations/animations";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

const Header = ({ history, dimensions }) => {
  const [menuState, setMenuState] = useState({
    menuOpened: false,
  });

  useEffect(() => {
    history.listen(() => {
      setMenuState({ menuOpened: false });
    });
    if (menuState.menuOpened === true) {
      // open hamburger
      openMenu(dimensions.width);
    }
    if (menuState.menuOpened === false) {
      // close hamburger
      closeMenu();
    }
  });
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <NavLink to="/">Mania Inc.</NavLink>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
