import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const ScrollButton = styled(LinkScroll)`
  border-radius: 50px;
  ${'' /* background: #f86252; */}

  background: ${({ primary }) =>
    primary
      ? '#01BF71'
      : `linear-gradient(
    90deg,
    rgba(248, 98, 82, 1) 40%,
    rgba(252, 176, 69, 1) 100%
  )`};
  white-space: nowrap;
  padding: ${({ bigPad }) => (bigPad ? '14px 48px' : '12px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  color: ${({ dark, primary }) =>
    dark ? '#010606' : primary ? '#fff' : '#010606'};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    background: ${({ dark, primary }) =>
      primary
        ? '#fff'
        : dark
        ? `linear-gradient(
    90deg,
    rgba(248, 98, 82, 1) 40%,
    rgba(252, 176, 69, 1) 100%
  )`
        : '#fff'};
    color: ${({ dark, primary }) =>
      primary ? '#010606' : dark ? '#fff' : '#010606'};
  }
`;
