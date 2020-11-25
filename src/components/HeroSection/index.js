import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import { ScrollButton } from '../ScrollButton';
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

          <HeroBtnWrapper>
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
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
