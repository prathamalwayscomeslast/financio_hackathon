// src/router.tsx
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
// import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Insights from './pages/Insights';
import Permissions from './pages/Permissions';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/app/dashboard',
        element: <Dashboard />
    },
    {
        path: '/app/chat',
        element: <Chat />
    },
    {
        path: '/app/insights',
        element: <Insights />
    },
    {
        path: '/app/permissions',
        element: <Permissions />
    }
]);
