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
            <SideBarLink to='about' onClick={toggleSideBar}>
              <AboutIcon />
              About
            </SideBarLink>
            <SideBarLink to='events' onClick={toggleSideBar}>
              <EventsIcon />
              Events
            </SideBarLink>
            <SideBarLink to='annualReport' onClick={toggleSideBar}>
              <ReportIcon />
              Annual Report
            </SideBarLink>
            <SideBarLink to='team' onClick={toggleSideBar}>
              <TeamIcon />
              Team
            </SideBarLink>
            <SideBarLink to='blogs' onClick={toggleSideBar}>
              <BlogsIcon />
              Blogs
            </SideBarLink>
            <SideBarLink to='celestech' onClick={toggleSideBar}>
              <CelestechIcon />
              Celestech
            </SideBarLink>
          </SideBarMenu>
          {/* <SideBtnWrap>
            <SideBarRoute to=''></SideBarRoute>
          </SideBtnWrap> */}
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
