import React from 'react';
import {
  EventsCard,
  EventsIcon,
  EventsCaption,
  EventsP,
} from './EventsElements';

const EventCard = ({ to, ImgSrc, caption, description }) => {
  return (
    <EventsCard to={to}>
      <EventsIcon src={ImgSrc} />
      <EventsCaption>{caption}</EventsCaption>
      <EventsP>{description}</EventsP>
    </EventsCard>
  );
};

export default EventCard;
