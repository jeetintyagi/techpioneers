import React from 'react';
import {
  EventsContainer,
  EventsHeading,
  EventsWrapper,
  EventsCard,
  EventsIcon,
  EventsCaption,
  EventsP,
} from './EventsElements';
import Icon1 from '../../images/svg-1.svg';

const EventSection = () => {
  return (
    <EventsContainer id='events'>
      <EventsHeading>Events</EventsHeading>
      <EventsWrapper>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption>Lorem ipsum dolor sit amet</EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
          </EventsP>
        </EventsCard>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption>Lorem ipsum dolor sit amet</EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
          </EventsP>
        </EventsCard>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption>Lorem ipsum dolor sit amet</EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
          </EventsP>
        </EventsCard>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption>Lorem ipsum dolor sit amet</EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
          </EventsP>
        </EventsCard>
      </EventsWrapper>
    </EventsContainer>
  );
};

export default EventSection;
