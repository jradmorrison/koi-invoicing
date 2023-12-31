// import DOM and router 
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import pages 
import App from './App.jsx';
import Home from './pages/Home';
import Signup from './pages/Signup/Signup.jsx';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Dashbaord from './pages/Dashboard';
import Invoice from './pages/Invoice.jsx';
import Account from './pages/Account';

// define router paths
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/dashboard',
        element: <Dashbaord />
      }, {
        path: '/invoice/:invoiceId',
        element: <Invoice />
      }, {
        path: '/account/:businessId',
        element: <Account />
      }
    ]
  },
]);

// mount router
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
