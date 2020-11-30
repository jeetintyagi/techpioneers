import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { motion } from 'framer-motion';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 100px;
  height: 1000px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 6) 100%
      )
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
  @media screen and (max-width: 768px) {
    height: 900px;
    top: -120px;
    padding: 0px 100px;
  }
  @media screen and (max-width: 768px) {
    height: 800px;
    top: -180px;
    padding: 0px 100px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const VideoBg = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;

  @media screen and(max-width:768px) {
    width: 70%;
    -o-object-fit: scale-down;
    object-fit: scale-down;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 150px;
  }
  @media (max-width: 480px) {
    padding-top: 200px;
  }
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 90px;
  text-align: center;
  padding-top: 80px;

  @media (max-width: 768px) {
    font-size: 50px;
  }
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Mark = styled.mark`
  color: #f86252;
  background: none;
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 800px;

  @media (max-width: 760px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
`;

export const ChevronButtonAnime = styled(motion.i)`
  font-size: 48px;
  color: rgb(248, 98, 82);

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
