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
const Navbar = ({ toggle }) => {
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
            hgj
          </Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <Navmenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign up</NavLinks>
            </NavItem>
          </Navmenu>
          <NavBtn>
            <NavBtnLink to="/signin"> Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
