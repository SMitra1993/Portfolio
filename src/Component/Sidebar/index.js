import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarRoute,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
} from "./SidebarElemnts";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>
            Sign up
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="/signin"> Sign In</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
