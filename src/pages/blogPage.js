import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

import {

  AboutSectionData2,
} from '../components/InfoSection/Data';

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {' '}
      <SideBar isOpen={isOpen} toggleSideBar={toggleSideBar} />
      <NavBar toggleSideBar={toggleSideBar} />
      <InfoSection {...AboutSectionData2}/>
      <Footer />
    </>
  );
};

export default BlogPage;
