import React from 'react';
import {
  ProfileCardContainer,
  ProfileCardHeading,
  Mark,
  ProfileCardSectionDescription,
  ProfileCardWrapper,
} from './ProfileCardElements';

import ProfileCard from './ProfileCard';
import { MentorDetails } from './data';

const ProfileCardSection = ({ topLine, description }) => {
  return (
    <ProfileCardContainer>
      <ProfileCardHeading>
        {topLine.TextInBlack}
        <Mark>{topLine.MarkText}</Mark>{' '}
      </ProfileCardHeading>
      <ProfileCardSectionDescription>
        {description}
      </ProfileCardSectionDescription>
      <ProfileCardWrapper>
        {MentorDetails.map((MentorDetail) => {
          return <ProfileCard key={MentorDetail.id} {...MentorDetail} />;
        })}
      </ProfileCardWrapper>
    </ProfileCardContainer>
  );
};

export default ProfileCardSection;
