import React from 'react';
import {
  FaEnvelope,
  //   FaInstagram,
  //   FaTwitter,
  //   FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

import {
  ProfileCardIcon,
  ProfileCardName,
  ProfileCardWithExternalLink,
  SocialIcons,
  SocialIconLink,
  SocialMediaWrap,
} from './ProfileCardElements';

const ProfileCard = ({ to, ImgSrc, caption, linkedin, email }) => {
  return (
    <ProfileCardWithExternalLink href={to} target='_blank'>
      <ProfileCardIcon src={ImgSrc} />
      <ProfileCardName>{caption}</ProfileCardName>
      <SocialMediaWrap>
        <SocialIcons>
          <SocialIconLink href={linkedin} target='_blank' aria-label='LinkedIn'>
            <FaLinkedin />
            &emsp;
          </SocialIconLink>
          <SocialIconLink
            color='blue'
            href={email}
            target='_blank'
            aria-label='Github'
          >
            <FaEnvelope />
          </SocialIconLink>
        </SocialIcons>
      </SocialMediaWrap>
    </ProfileCardWithExternalLink>
  );
};

export default ProfileCard;
