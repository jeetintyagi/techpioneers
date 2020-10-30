import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBarRoute,
} from './SideBarElements';

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggleSideBar}>
        <Icon onClick={toggleSideBar}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to='about' onClick={toggleSideBar}>
              About
            </SideBarLink>
            <SideBarLink to='about' onClick={toggleSideBar}>
              Discover
            </SideBarLink>
            <SideBarLink to='about' onClick={toggleSideBar}>
              Services
            </SideBarLink>
            <SideBarLink to='about' onClick={toggleSideBar}>
              Sign Up
            </SideBarLink>
          </SideBarMenu>
          <SideBtnWrap>
            <SideBarRoute to='/signin'>Sign In</SideBarRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
