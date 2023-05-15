import React from 'react';
import EventForm from '../EventForm';
import { useParams } from 'react-router-dom';

export default function EditEventPage() {
  const params = useParams();
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Edit your ({params.eventId}) event:
      </h1>{' '}
      <EventForm />{' '}
    </>
  );
}
