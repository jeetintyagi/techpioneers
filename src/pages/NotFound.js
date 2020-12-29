import React, { useState, useEffect } from 'react';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const NotFound = () => {
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
      <h1>404 NOT FOUND</h1>
      <Footer />{' '}
    </>
  );
};

export default NotFound;
