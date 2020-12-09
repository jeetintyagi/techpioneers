import React from 'react';
import {
  ProfileCardContainer,
  ProfileCardHeading,
  ProfileCardWrapper,
} from './ProfileCardElements';

import ProfileCard from './ProfileCard';
import { MentorDetails } from './data';

const ProfileCardSection = () => {
  return (
    <ProfileCardContainer>
      <ProfileCardHeading>Mentors</ProfileCardHeading>
      <ProfileCardWrapper>
        {MentorDetails.map((MentorDetail) => {
          return <ProfileCard key={MentorDetail.id} {...MentorDetail} />;
        })}
      </ProfileCardWrapper>
    </ProfileCardContainer>
  );
};

export default ProfileCardSection;
