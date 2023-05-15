import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import classes from '../EventForm.module.css';

export default function EventDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  function navigateToEditHandler() {
    navigate('edit');
  }
  return (
    <>
      {' '}
      <form className={classes.form}>
        <h1>Event (id: {params.eventId}) details:</h1>
        <div className={classes.actions}>
          <button onClick={navigateToEditHandler}>Edit Event</button>
        </div>
      </form>
    </>
  );
}
