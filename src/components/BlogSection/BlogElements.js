import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const BlogContainer = styled.div`
  color: #010606;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#010606')};
  padding: 100px 0;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  @media screen and (max-width: 480px) {
    margin-top: 80px;
    padding: 0px 0;
  }
`;

export const BlogWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 900px;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  padding: 70 0px;
  justify-content: center;
`;

export const BlogContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const BlogH1 = styled.h1`
  color: #010606;
  font-size: 60px;
  text-align: center;

  @media screen and(max-width:760px) {
    font-size: 48px;
  }
  @media screen and(max-width:480px) {
    font-size: 32px;
  }
`;

export const Mark = styled.mark`
  color: #f86252;
  background: none;
`;

export const BlogP = styled.p`
  margin-top: 24px;
  color: #010606;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and(max-width:760px) {
    font-size: 24px;
  }
  @media screen and(max-width:480px) {
    font-size: 18px;
  }
`;

export const BlogBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  padding: 50px 0;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  overflow: hidden;
  -o-object-fit: scale-down;
  object-fit: scale-down;
  object-fit: covered;
`;
