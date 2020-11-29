import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import { ScrollButton } from '../ScrollButton';
import { motion } from 'framer-motion';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
  Mark,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { BsChevronDoubleDown } from 'react-icons/bs';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg>
            <Slider />
          </VideoBg>
          {/* <VideoBg autoplay loop muted src={Video} type='video/mp4' /> */}
        </HeroBg>

        <HeroContent>
          <HeroH1>
            We are Tech
            <Mark>Pioneers</Mark>
          </HeroH1>
          <HeroP>
            Computer Science Society Aryabhatta College | University of Delhi{' '}
          </HeroP>

          {/* <HeroBtnWrapper>
            <ScrollButton
              to='events'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              bigPad='true'
              fontBig='true'
              dark='true'
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </ScrollButton>
          </HeroBtnWrapper> */}
          <HeroBtnWrapper>
            <ScrollButton
              style={{
                background: 'transparent',
                fontSize: '50px',
                color: 'rgb(248,98,82)',
              }}
              to='about'
              bigPad='true'
              fontBig='true'
              dark='true'
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              <motion.i
                initial={{ y: -10, opacity: 2, scale: 1 }}
                animate={{ y: 20, opacity: 0.2, scale: 0.6 }}
                whileHover={{ opacity: 1 }}
                transition={{
                  type: 'tween',
                  repeat: Infinity,
                  duration: 2,
                  repeatType: 'reverse',
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <BsChevronDoubleDown />
              </motion.i>
            </ScrollButton>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
