import React from 'react';
import {
  EventsCard,
  EventsIcon,
  EventsCaption,
  EventsP,
} from './EventsElements';

const EventCard = ({ imgsrc, caption, description }) => {
  return (
    <EventsCard>
      <EventsIcon src={imgsrc} />
      <EventsCaption>{caption}</EventsCaption>
      <EventsP>{description}</EventsP>
    </EventsCard>
  );
};

export default EventCard;
