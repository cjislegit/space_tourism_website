import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import DestinationPage from './pages/Destination';
import CrewPage from './pages/Crew';
import TechnologyPage from './pages/Technology';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/destination', element: <DestinationPage /> },
      { path: '/crew', element: <CrewPage /> },
      { path: '/technology', element: <TechnologyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
