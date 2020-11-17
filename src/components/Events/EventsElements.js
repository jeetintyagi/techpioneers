import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EventsContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  }
`;

export const EventsHeading = styled.h1`
  font-size: 2.5rem;
  color: #F86252;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const EventsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const EventsCard = styled(Link)`
  background: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 20px #515151;
    cursor: pointer;
  }
`;

export const EventsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const EventsCaption = styled.h2`
  color: #010606;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 700px;
`;

export const EventsP = styled.p`
  color: #010606;
  font-size: 1rem;
  text-align: center;
  font-weight: 400px;
`;
