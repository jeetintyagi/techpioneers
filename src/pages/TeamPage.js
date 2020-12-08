import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import EventSection from '../components/Events';
import EventCardExternal from '../components/Events/EventCardExternal';
import { CelestechEventContent } from '../components/Events/data';

const TeamPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <EventSection />
      <EventCardExternal {...CelestechEventContent} />

      <Footer />
    </>
  );
};

export default TeamPage;
