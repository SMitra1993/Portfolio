import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink,
} from "./FooterElements";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                fefe
              </SocialLogo>
              <WebsiteRights>
                Made with <FaHeart /> by Sourav Saha © Copyright{" "}
                {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconsLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank" aria-label="Linkedln">
                  <FaLinkedin />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank" aria-label="Github">
                  <FaGithub />
                </SocialIconsLink>
                <SocialIconsLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink
                  href="/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconsLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
