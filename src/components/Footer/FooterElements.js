import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background: rgb(248, 98, 91);
  background: linear-gradient(
    90deg,
    rgba(248, 98, 82, 1) 40%,
    rgba(252, 176, 69, 1) 100%
  );
`;

export const FooterWrap = styled.div`
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fbfbfb;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fbfbfb;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

  &:hover {
    color: #010606;
    font-weight: 700;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #010606;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialIconLinkWithText = styled.a`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #010606;
    transition: 0.3s ease-in-out;
  }
`;

export const ImgWrap = styled.div`
  max-width: 80px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding: 1px;
  overflow: hidden;
  -o-object-fit: scale-down;
  object-fit: scale-down;
  object-fit: cover;
`;
