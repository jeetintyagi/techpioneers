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

const BlogSection = ({ lightBg, ImgSrc, alt }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <BlogContainer id='blogs' lightBg={lightBg}>
      <BlogWrapper>
        <BlogContent>
          <BlogH1>
            Check out our <Mark>blogs</Mark>
          </BlogH1>
          <BlogP>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quod
            dolores hic voluptatem, neque molestias ullam, similique quidem
            suscipit adipisci.
          </BlogP>
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
