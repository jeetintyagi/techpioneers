import React from 'react';
import Slider from '../Slider/Slider';
import { ScrollButton } from '../ScrollButton';
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroP,
  HeroH1,
  Mark,
  HeroBtnWrapper,
  ChevronButtonAnime,
} from './HeroElements';
import { BsChevronDoubleDown } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
            <Slider />
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
          <HeroBtnWrapper>
            <ScrollButton
              style={{
                background: 'transparent',
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
              <ChevronButtonAnime
                initial={{ y: 10, opacity: 1, scale: 1 }}
                animate={{ y: -10, opacity: 0.2, scale: 1 }}
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
              </ChevronButtonAnime>
            </ScrollButton>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
