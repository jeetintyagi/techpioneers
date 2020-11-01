import styled from 'styled-components';
import { link } from 'react-scroll';

export const Button = styled((props) => <button {...props} />, link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#09f')};
  white-space: nowrap;
  padding: ${({ bigPad }) => (bigPad ? '14px 48px' : '12px 30px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  color: ${({ dark, primary }) =>
    dark ? '#010606' : primary ? '#fff' : '#01BF71'};
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
      primary ? '#fff' : dark ? '#010606' : '#09f'};
    color: ${({ dark, primary }) =>
      primary ? '#010606' : dark ? '#fff' : '#01BF71'};
  }
`;
