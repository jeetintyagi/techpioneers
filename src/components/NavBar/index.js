import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavLinkToExternalSite,
  ImgWrap,
  Img,
  // NavBtn,
  // NavBtnLink,
} from './NavBarElements';
import TechPioneers from '../../images/Techpioneers.png';

const NavBar = ({ toggleSideBar }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    if (window.location.href === 'http://localhost:3000/') {
      window.addEventListener('scroll', changeNav);
    } else {
      setScrollNav(true);
    }
  }, [scrollNav]);

  const toggleToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleToTop}>
            <ImgWrap>
              <Img src={TechPioneers} alt='TechPioneers' />
            </ImgWrap>
          </NavLogo>
          <MobileIcon onClick={toggleSideBar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                to='/about'
                onClick={toggleToTop}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                to='/events'
                onClick={toggleToTop}
              >
                Events
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                to='/annualReport'
                onClick={toggleToTop}
              >
                Annual Report
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                to='/team'
                onClick={toggleToTop}
              >
                Team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                onClick={toggleToTop}
                to='/blogs'
              >
                Blogs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinkToExternalSite
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                href='https://celestech.live/'
                target='_blank'
              >
                Celestech
              </NavLinkToExternalSite>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn> */}
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
