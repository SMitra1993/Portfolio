import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background-color: #b25ce7;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
`;
export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding-top: 32px;
  }
`;
export const FooterLinkWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
export const FooterItems = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 16px;
  flex-direction: column;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;
export const FooterLink = styled.div`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #0b25ce7;
    transition: 0.3s ease-out;
  }
`;
export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;
export const SocialMediaWrap = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 420px) {
    flex-direction: columns;
  }
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;
export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIconsLink = styled.a`
  color: #fff;
  font-size: 35px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606 !important;
    transform: scale(1.05);
    font-size: 45px;
  }
`;
