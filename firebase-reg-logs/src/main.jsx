import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './Register.jsx'
import Login from './Login.jsx'
import AuthProvider from './AuthContext.jsx'
import PublicRoute from '../PublicRoute.jsx'
import ProtectedRoute from '../ProtectedRoute.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <ProtectedRoute>
                <App />
            </ProtectedRoute>
    },
    {
        path: '/register',
        element:
            <PublicRoute>
                <Register />
            </PublicRoute>
    },
    {
        path: '/login',
        element:
            <PublicRoute>
                <Login />
            </PublicRoute>
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
