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
const Sidebar = ({ isOpen, toggle, onContact }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon></CloseIcon>
      </Icon>
      {onContact ? (
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Works
            </SidebarLink>
            <SidebarLink to="tech" onClick={toggle}>
              Tech Stack
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/contact"> Say Hello</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
      ) : (
        <SidebarBtnWrap>
          <SidebarRoute to="/"> Home</SidebarRoute>
        </SidebarBtnWrap>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
