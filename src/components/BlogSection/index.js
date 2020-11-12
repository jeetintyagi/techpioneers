import React from 'react';
import {
  BlogContainer,
  BlogWrapper,
  BlogRow,
  Column1,
  Column2,
} from './BlogElements';

const BlogSection = () => {
  return (
    <BlogContainer>
      <BlogWrapper>
        <BlogRow>
          <Column1></Column1>
          <Column2></Column2>
        </BlogRow>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default BlogSection;
