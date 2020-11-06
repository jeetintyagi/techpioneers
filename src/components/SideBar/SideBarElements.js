import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import { MdInfo, MdEvent } from 'react-icons/md';
import { HiDocumentReport } from 'react-icons/hi';
import { RiArticleFill, RiTeamFill } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';

export const SideBarContainer = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  top: 0;
  left: 0;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 80px);
  }
`;

export const SideBarLink = styled(LinkScroll)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover,
  :active {
    color: #01bf71;
    font-size: 2rem; // #comment it if you don't like this kinda effect
    ${'' /* border-bottom: 3px solid #01bf71; */}
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 1.2rem;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const AboutIcon = styled(MdInfo)`
  font-size: 20px;
  margin-right: 10px;
  &:hover {
    color: #fff;
  }
`;

export const EventsIcon = styled(MdEvent)`
  font-size: 20px;
  margin-right: 10px;
`;

export const ReportIcon = styled(HiDocumentReport)`
  font-size: 20px;
  margin-right: 10px;
`;

export const TeamIcon = styled(RiTeamFill)`
  font-size: 20px;
  margin-right: 10px;
`;

export const BlogsIcon = styled(RiArticleFill)`
  font-size: 20px;
  margin-right: 10px;
`;

export const CelestechIcon = styled(FaGlobeAmericas)`
  font-size: 20px;
  margin-right: 10px;
`;
