import React from 'react';
import {
  EventsContainer,
  EventsHeading,
  EventsWrapper,
} from './EventsElements';
import EventCard from './EventCard';
import { ImagixEventContent } from './data';

const EventSection = () => {
  return (
    <EventsContainer id='events'>
      <EventsHeading>Events</EventsHeading>
      <EventsWrapper>
        <EventCard {...ImagixEventContent} />
        <EventCard {...ImagixEventContent} />
        <EventCard {...ImagixEventContent} />
      </EventsWrapper>
    </EventsContainer>
  );
};

export default EventSection;
