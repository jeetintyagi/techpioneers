import React, { useEffect } from 'react';
import {
  ProfileCardContainer,
  ProfileCardHeading,
  Mark,
  ProfileCardSectionDescription,
  ProfileCardWrapper,
} from './ProfileCardElements';

import ProfileCard from './ProfileCard';
import { MentorsDetails } from './data';
import { CoreMembersDetails } from './data';

const ProfileCardSection = ({ topLine, description }) => {
  useEffect(() => {
    document.title = 'TechPioneers | Team';
  }, []);
  return (
    <ProfileCardContainer>
      <ProfileCardHeading>
        {topLine.TextInBlack + ' '}
        <Mark>{topLine.MarkText}</Mark>{' '}
      </ProfileCardHeading>
      <ProfileCardSectionDescription>
        {description}
      </ProfileCardSectionDescription>
      <ProfileCardWrapper>
        {topLine.TextInBlack === 'Our' &&
          MentorsDetails.map((MentorDetail) => {
            return <ProfileCard key={MentorDetail.id} {...MentorDetail} />;
          })}
        {topLine.TextInBlack === 'Core' &&
          CoreMembersDetails.map((CoreMemberDetail) => {
            return (
              <ProfileCard key={CoreMemberDetail.id} {...CoreMemberDetail} />
            );
          })}
      </ProfileCardWrapper>
    </ProfileCardContainer>
  );
};

export default ProfileCardSection;
