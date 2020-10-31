import React, { useState } from 'react';
import SideBar from '../components/SideBar/index';
import NavBar from '../components/NavBar/index';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { InfoSectionData } from '../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <HeroSection />
      <InfoSection {...InfoSectionData}/>
    </>
  );
};

export default Home;
