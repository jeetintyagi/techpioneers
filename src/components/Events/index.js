import React from 'react';

const Events = () => {
  return (
    <EventsContainer id='services'>
      <EventsHeading>Events</EventsHeading>
      <EventsWrapper>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption></EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
            dignissimos laborum, fugiat, deserunt nam aperiam temporibus ullam
            voluptatum quas maiores impedit dolore qui cumque? Reprehenderit,
            et!
          </EventsP>
        </EventsCard>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption>Lorem ipsum dolor sit amet</EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
            dignissimos laborum, fugiat, deserunt nam aperiam temporibus ullam
            voluptatum quas maiores impedit dolore qui cumque? Reprehenderit,
            et!
          </EventsP>
        </EventsCard>
        <EventsCard>
          <EventsIcon src={Icon1} />
          <EventsCaption>Lorem ipsum dolor sit amet</EventsCaption>
          <EventsP>
            {' '}
            consectetur adipisicing elit. Molestias nesciunt quis alias libero
            dignissimos laborum, fugiat, deserunt nam aperiam temporibus ullam
            voluptatum quas maiores impedit dolore qui cumque? Reprehenderit,
            et!
          </EventsP>
        </EventsCard>
      </EventsWrapper>
    </EventsContainer>
  );
};

export default Events;
