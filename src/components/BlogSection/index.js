/*
BlogSection component is a reusable component 
used for blog as well as team section on home page 
*data.js holds the appropriate content and svg images 
to give different look to each component 
but with a same UI layout 
*/

import React, { useState } from 'react';
import {
  BlogContainer,
  BlogWrapper,
  BlogContent,
  BlogH1,
  BlogP,
  BlogBtnWrapper,
  Mark,
  ArrowForward,
  ArrowRight,
  ImgWrap,
  Img,
} from './BlogElements';
import { ButtonRouter } from '../ButtonRouter';

const BlogSection = ({ lightBg, h1, h1Mark, description, ImgSrc, alt }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <BlogContainer id='blogs' lightBg={lightBg}>
      <BlogWrapper>
        <BlogContent>
          <BlogH1>
            {h1} <Mark>{h1Mark}</Mark>
          </BlogH1>
          <BlogP>{description}</BlogP>
          <BlogBtnWrapper>
            <ButtonRouter
              to='/blogs'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              bigPad='true'
              fontBig='true'
              dark='true'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </ButtonRouter>
          </BlogBtnWrapper>
          <ImgWrap>
            <Img src={ImgSrc} alt={alt} />
          </ImgWrap>
        </BlogContent>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default BlogSection;
