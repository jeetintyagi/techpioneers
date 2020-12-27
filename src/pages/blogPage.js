import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

import { BlogSectionData } from '../components/BlogSection/data';

const BlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.title = 'TechPioneers | Blogs';
  }, []);
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
