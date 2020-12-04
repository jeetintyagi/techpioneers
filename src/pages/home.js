import React, { useState } from 'react';
import SideBar from '../components/SideBar/index';
import NavBar from '../components/NavBar/index';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
  AnnualReportSectionData1,
  AnnualReportSectionData2,
  AboutSectionData1,
  AboutSectionData2,
} from '../components/InfoSection/Data';
import EventSection from '../components/Events';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import { BlogSectionData, TeamSectionData } from '../components/BlogSection/data';

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
      <InfoSection {...AboutSectionData2} />
      <EventSection />
      <InfoSection {...AnnualReportSectionData2} />
      <BlogSection {...BlogSectionData}/>
      <BlogSection {...TeamSectionData}/>
      <Footer />
    </>
  );
};

export default Home;
