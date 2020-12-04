import React from 'react';
import {
  EventsContainer,
  EventsHeading,
  EventsWrapper,
} from './EventsElements';
import EventCard from './EventCard';
import {
  CelestechEventContent,
  WebinarEventContent,
  WorkshopEventContent,
} from './data';
import EventCardExternal from './EventCardExternal';

const EventSection = () => {
  return (
    <EventsContainer id='events'>
      <EventsHeading>Events</EventsHeading>
      <EventsWrapper>
        <EventCardExternal {...CelestechEventContent} />
        <EventCard {...WebinarEventContent} />
        <EventCard {...WorkshopEventContent} />
      </EventsWrapper>
    </EventsContainer>
  );
};

export default EventSection;
