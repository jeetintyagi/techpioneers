// InfoSection is a reusable component used as the
// design model for About and Discover section
// about and Discover are same in terms of UI / UX
// **in short this component is highly reusable
// check the Data.js to know more about the props
// and their possible values you can play with.

import React from 'react';
import { ButtonRouter } from '../ButtonRouter';
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  topLine,
  headLine,
  lightText,
  darkText,
  description,
  imgStart,
  ButtonLabel,
  to,
  primary,
  bigPad,
  fontBig,
  pad,
  dark,
  ImgSrc,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine primary={primary}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <ButtonRouter
                    to={to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact={true}
                    offset={-80}
                    primary={primary}
                    bigPad={bigPad}
                    fontBig={fontBig}
                    pad={pad}
                    dark={dark}
                  >
                    {ButtonLabel}
                  </ButtonRouter>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={ImgSrc} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
