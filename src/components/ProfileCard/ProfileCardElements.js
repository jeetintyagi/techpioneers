import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfileCardContainer = styled.section`
  margin: 200px 0 200px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  ${
    '' /* @media screen and (max-width: 768px) {
    height: 1100px;
  }
  @media screen and (max-width: 480px) {
    height: 1500px;
  } */
  }
`;

export const ProfileCardHeading = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Mark = styled.mark`
  color: #f86252;
  background: none;
`;

export const ProfileCardSectionDescription = styled.p`
  margin-bottom: 30px;
  color: #010606;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media (max-width: 760px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ProfileCardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 80px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProfileCard = styled(Link)`
  background: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  max-width: 350px;
  padding: 30px;
  box-shadow: 0 9px 31px rgba(0, 0, 0, 0.5);
  text-decoration: none;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 9 31px #515151;
    cursor: pointer;
  }
`;

export const ProfileCardWithExternalLink = styled.a`
  background: #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  max-width: 350px;
  ${'' /* padding: 30px; */}
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  text-decoration: none;
  transform: scale(1.02);
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 31px #515151;
  cursor: pointer;

  ${
    '' /* &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 0 20px #515151;
    cursor: pointer;
  } */
  }
`;

export const ProfileCardIcon = styled.img`
  top: 0;
  border-radius: 10px;
  height: 250px;
  width: 250px;
  margin-bottom: 10px;
`;

export const ProfileCardName = styled.h2`
  color: #010606;
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 700px;
`;

export const ProfileCardP = styled.p`
  color: #010606;
  font-size: 1rem;
  font-weight: 400px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #1da1f2;
  font-size: 30px;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #010606;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
