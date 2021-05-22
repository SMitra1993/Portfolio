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
  FaReact,
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
                Sourav
              </SocialLogo>
            </SocialMediaWrap>
            <SocialMediaWrap>
              <WebsiteRights>
                Made with <FaHeart />
                {" & "} <FaReact /> by Sourav Saha © Copyright{" "}
                {new Date().getFullYear()}
              </WebsiteRights>
            </SocialMediaWrap>
            <SocialMediaWrap>
              <SocialIcons>
                <SocialIconsLink
                  href="https://www.facebook.com/sourav.saha.9484/"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://www.linkedin.com/in/sourav-saha-66b37b92/"
                  target="_blank"
                  aria-label="Linkedln"
                >
                  <FaLinkedin />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://github.com/SouravSaha101"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://twitter.com/ChillAdmi_"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconsLink>
                <SocialIconsLink
                  href="https://www.instagram.com/chill.admi/"
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
