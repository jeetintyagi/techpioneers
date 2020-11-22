import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SliderWrapper = styled.div`
  margin: 0;
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 150px 100px;
  height: 1000px;
  position: relative;
  overflow: hidden;
`;

export const SliderImages = styled(motion.img)`
  position: absolute;
  max-width: 100%;
`;

export const SliderNextButton = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  right: 10px;
`;

export const SliderPrevButton = styled.div`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
  left: 10px;
  transform: scale(-1);
`;

// To add text on the slider images
export const InnerTitle = styled.h1`
  font-weight: 900;
  margin: 0 auto;
  max-width: 840px;
  color: #ffffff;
  font-size: 64px;
  line-height: 1;
`;

export const InnerDescription = styled.p`
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  margin: 20px auto 30px;
  max-width: 640px;
`;

export const InnerButton = styled.button`
  -webkit-transition-delay: 0s;
  transition-delay: 0s;
`;
