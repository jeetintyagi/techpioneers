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
  NavBtn,
  NavBtnLink,
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
              <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='annualReport'>Annual Report</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='team'>Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='team'>Team</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='blogs'>Blogs</NavLinks>
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
