import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';
import EventsList from './EventsList';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=''
              end={true}
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to='new'
              className={({ isActive }) => (isActive ? classes.active : '')}
            >
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
