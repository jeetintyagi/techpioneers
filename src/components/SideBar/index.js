import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  AboutIcon,
  EventsIcon,
  ReportIcon,
  TeamIcon,
  BlogsIcon,
  CelestechIcon,
  // SideBtnWrap,
  // SideBarRoute,
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
            <SideBarLink
              to='/about'
              onClick={toggleSideBar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <AboutIcon />
              About
            </SideBarLink>
            <SideBarLink
              to='/events'
              onClick={toggleSideBar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <EventsIcon />
              Events
            </SideBarLink>
            <SideBarLink
              to='/annualReport'
              onClick={toggleSideBar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <ReportIcon />
              Annual Report
            </SideBarLink>
            <SideBarLink
              to='/team'
              onClick={toggleSideBar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <TeamIcon />
              Team
            </SideBarLink>
            <SideBarLink
              to='/blogs'
              onClick={toggleSideBar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <BlogsIcon />
              Blogs
            </SideBarLink>
            <SideBarLink
              to='/celestech'
              onClick={toggleSideBar}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <CelestechIcon />
              Celestech
            </SideBarLink>
          </SideBarMenu>
          {/* <SideBtnWrap>
            <SideBarRoute to='/'></SideBarRoute>
          </SideBtnWrap> */}
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
