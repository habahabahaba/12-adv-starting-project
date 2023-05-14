import React from 'react';
import EventsNavigation from '../EventsNavigation';
import { Outlet } from 'react-router-dom';

export default function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
