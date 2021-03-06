import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  background: #000;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #o1bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const SidebarMenu = styled.ul`
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
  @media screen and (max-width: 960px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarRoute = styled(LinkR)`
  padding: 1rem 1rem;
  font-size: 1rem;
  border: 2px solid #fff;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #010606;
    transition: 0.2s ease-in-out;
    background: #fff;
  }
`;
