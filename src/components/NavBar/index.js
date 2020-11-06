import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  // NavBtn,
  // NavBtnLink,
} from './NavBarElements';

const NavBar = ({ toggleSideBar }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>TechPioneers</NavLogo>
          <MobileIcon onClick={toggleSideBar}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='about'
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='events'
              >
                Events
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='annualReport'
              >
                Annual Report
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='team'
              >
                Team
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='blogs'
              >
                Blogs
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to='celestech'
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
