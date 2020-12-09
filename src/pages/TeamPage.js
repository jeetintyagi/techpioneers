import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ProfileCardSection from '../components/ProfileCard';
import { MentorSection } from '../components/ProfileCard/data';

const TeamPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <ProfileCardSection {...MentorSection} />

      <Footer />
    </>
  );
};

export default TeamPage;
