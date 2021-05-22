import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  Navmenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./Navbarelements";
const Navbar = ({ toggle, onContact }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Navlogo to="/" onClick={toggleHome}>
            Sourav
          </Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          {onContact ? (
            <>
              <Navmenu>
                <NavItem>
                  <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="discover">Works</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="tech">Tech Stack</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="project">Timeline</NavLinks>
                </NavItem>
              </Navmenu>
              <NavBtn>
                <NavBtnLink to="/contact"> Say Hello</NavBtnLink>
              </NavBtn>
            </>
          ) : null}
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
