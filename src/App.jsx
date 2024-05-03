import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import NavBar from './components/NavBar';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
