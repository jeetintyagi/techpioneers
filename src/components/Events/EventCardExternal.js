import React from 'react';
import {
  EventsIcon,
  EventsCaption,
  EventsP,
  EventsCardWithExternalLink,
} from './EventsElements';

const EventCardExternal = ({ to, ImgSrc, caption, description }) => {
  return (
    <EventsCardWithExternalLink href={to} target='_blank'>
      <EventsIcon src={ImgSrc} />
      <EventsCaption>{caption}</EventsCaption>
      <EventsP>{description}</EventsP>
    </EventsCardWithExternalLink>
  );
};

export default EventCardExternal;
