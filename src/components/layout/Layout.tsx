import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const Layout: React.FC = () => {
    const navigation = [
        { name: 'Dashboard', href: '/app/dashboard', icon: '📊' },
        { name: 'Insights', href: '/app/insights', icon: '📈' },
        { name: 'Chat', href: '/app/chat', icon: '💬' },
        { name: 'Permissions', href: '/app/permissions', icon: '🔒' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-sm">
                <div className="p-6">
                    <h1 className="text-xl font-bold text-primary-600">Financio</h1>
                </div>
                <nav className="mt-6">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                                `flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                                    isActive
                                        ? 'bg-primary-50 text-primary-600 border-r-2 border-primary-600'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`
                            }
                        >
                            <span className="mr-3 text-lg">{item.icon}</span>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
