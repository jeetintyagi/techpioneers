import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ProfileCardSection from '../components/ProfileCard';
import {
  CoreMembersSection,
  MentorsSection,
} from '../components/ProfileCard/data';

const TeamPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.title = 'TechPioneers | Team';
  }, []);
  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <ProfileCardSection {...MentorsSection} />
      <ProfileCardSection {...CoreMembersSection} />

      <Footer />
    </>
  );
};

export default TeamPage;
