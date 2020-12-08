import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#fbfbfb' : 'transparent')};
  //rgb(248,98,82)
  height: 80px;
  margin-top: -80px; // comment it if you ain't using react-scroll or landing page is of 1 window size vertically
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky; // !mportant
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #010606;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 760px) {
    color: #010606;
    display: block;
    position: absolute;
    padding: 25px;
    top: 0;
    right: 0;
    transform: translated(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${({ scrollNav }) => (scrollNav ? '#010606' : '#fbfbfb')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #f86252;
    border-bottom: 3px solid #f86252;
    /* Will override color (regardless of order) */
    ${'' /* -webkit-text-fill-color: white;  */}
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #f86252;
  }

  &.active {
    border-bottom: 3px solid #f86252;
  }

  @media (max-width: 1425px) {
    color: #010606;
  }
`;

export const NavLinkToExternalSite = styled.a`
  color: ${({ scrollNav }) => (scrollNav ? '#010606' : '#fbfbfb')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    border-bottom: 3px solid #f86252;
  }

  &.active {
    border-bottom: 3px solid #f86252;
  }

  @media (max-width: 1425px) {
    color: #010606;
  }
`;

export const NavBtn = styled.nav`
  display: flex;

  align-items: center;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #f86252;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #010606;
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
