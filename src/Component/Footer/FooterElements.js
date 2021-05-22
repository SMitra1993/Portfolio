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
export const TermsRight = styled.small`
  color: #fff;
  margin-bottom: 16px;
  margin-left: auto;
`;
export const CopyRight = styled.small`
  color: #fff;
  margin-bottom: 16px;

  margin-right: auto;
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
