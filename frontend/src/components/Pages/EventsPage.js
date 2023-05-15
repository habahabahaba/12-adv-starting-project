import React from 'react';
import EventsList from '../EventsList';

export default function EventsPage(props) {
  return <EventsList events={props.events} />;
}
