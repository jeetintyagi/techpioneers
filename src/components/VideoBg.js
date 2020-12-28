import styled from 'styled-components';

export const VideoBg = styled.div`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #fff;

  @media screen and(max-width:768px) {
    width: 70%;
    -o-object-fit: scale-down;
    object-fit: scale-down;
  }
`;
