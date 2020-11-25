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
    window.addEventListener('scroll', changeNav);
  }, [scrollNav]);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to='/' onClick={toggleHome}>
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
              >
                Team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                to='/blogs'
              >
                Blogs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                scrollNav={scrollNav}
                exact={true}
                activeClassName='active'
                to='/celestech'
              >
                Celestech
              </NavLinks>
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
