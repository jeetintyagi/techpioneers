import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import { ButtonX } from '../ButtonElement';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroP,
  HeroH1,
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
          <HeroH1>TechPioneers</HeroH1>
          <HeroP>Department of computer science</HeroP>
          {/* <HeroP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In eius
            culpa, officiis, fugiat necessitatibus aliquam eveniet tempore
            labore tenetur veniam, natus ex eaque rem hic veritatis. Esse
            reprehenderit id numquam.
          </HeroP> */}
          <HeroP>Aryabhatta College</HeroP>
          <HeroBtnWrapper>
            <ButtonX
              to='events'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              bigPad='true'
              fontBig='true'
              primary='true'
              dark='true'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonX>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
