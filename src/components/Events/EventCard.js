import React from 'react';
import {
  EventsCard,
  EventsIcon,
  EventsCaption,
  EventsP,
} from './EventsElements';

const EventCard = ({ to, imgsrc, caption, description }) => {
  return (
    <EventsCard to={to}>
      <EventsIcon src={imgsrc} />
      <EventsCaption>{caption}</EventsCaption>
      <EventsP>{description}</EventsP>
    </EventsCard>
  );
};

export default EventCard;
