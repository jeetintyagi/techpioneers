import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaUniversity,
  FaBuilding,
  FaGlobe,
} from 'react-icons/fa';
import TechPioneers from '../../images/Techpioneers.png';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  WebsiteRights,
  ImgWrap,
  Img,
  SocialIconLinkWithText,
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>

              <FooterLink to='/events'>Events</FooterLink>
              <FooterLink to='/annualreport'>Annual Report</FooterLink>
              <FooterLink to='/team'>Team</FooterLink>
              <FooterLink to='/blogs'>Blogs</FooterLink>
              <FooterLink to='/celestech'>Celestech</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>

              <FooterLink to='/blogs'>Contact</FooterLink>
              <FooterLink to='/blogs'>Sponsor us</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>External</FooterLinkTitle>
              <SocialIconLinkWithText
                href='http://www.du.ac.in/du/'
                target='_blank'
              >
                <FaUniversity /> DU
              </SocialIconLinkWithText>
              <SocialIconLinkWithText
                href='https://aryabhattacollege.ac.in/'
                target='_blank'
              >
                <FaBuilding /> Aryabhatta College
              </SocialIconLinkWithText>
              <SocialIconLinkWithText
                href='https://celestech.live/'
                target='_blank'
              >
                <FaGlobe /> Celestech
              </SocialIconLinkWithText>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <ImgWrap>
              <Img src={TechPioneers} alt='TechPioneers' />
            </ImgWrap>
            <SocialLogo to='/'>TechPioneers</SocialLogo>
            <WebsiteRights>
              TechPioneers © {new Date().getFullYear()} <br />
              All Rights Reserved
            </WebsiteRights>
            <br />
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/techpioneersofficial'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/techpioneersofficial/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/techpioneers01'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                href='https://www.linkedin.com/company/techpioneersofficial/'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href='https://github.com/jeetintyagi/techpioneers'
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>{' '}
    </FooterContainer>
  );
};

export default Footer;
