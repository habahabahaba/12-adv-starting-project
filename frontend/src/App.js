// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './components/Layout/RootLayout';
import ErrorPage from './components/Pages/ErrorPage';
import HomePage from './components/Pages/HomePage';
import EventsLayout from './components/Layout/EventsLayout';
import EventDetailPage from './components/Pages/EventDetailPage';
import NewEventPage from './components/Pages/NewEventPage';
import EventsPage from './components/Pages/EventsPage';
import EditEventPage from './components/Pages/EditEventPage';

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'A dummy event1',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
  {
    id: 'e2',
    title: 'A dummy event2',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
  {
    id: 'e3',
    title: 'A dummy event3',
    date: '2023-02-22',
    image:
      'https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg',
    description: 'Join this amazing event and connect with fellow developers.',
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, errorElement: <ErrorPage /> },
      {
        path: 'events',
        element: <EventsLayout />,
        errorElement: <ErrorPage />,
        children: [
          { path: '', element: <EventsPage events={DUMMY_EVENTS} /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
