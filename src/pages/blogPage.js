import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

import { BlogSectionData } from '../components/BlogSection/data';

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
      <BlogSection {...BlogSectionData} />
      <Footer />
    </>
  );
};

export default BlogPage;
