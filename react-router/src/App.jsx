import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import User from './pages/User';
import UserDetail from './pages/UserDetail';

const router = createBrowserRouter([
    {
        element: (
            <>
                <Navigation />
                <Outlet />
            </>
        ),
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/contact', element: <Contact /> },
            { path: '/user', element: <User /> },
            { path: '/user/:id', element: <UserDetail /> },
        ]
    }
]);

const App = () => {
    return <RouterProvider router={router} />;
}

export default App;