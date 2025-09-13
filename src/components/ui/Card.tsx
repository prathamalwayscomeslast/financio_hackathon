import React from 'react';
import clsx from 'clsx';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    padding?: 'sm' | 'md' | 'lg' | 'none';
}

const Card: React.FC<CardProps> = ({ children, className, padding = 'md' }) => {
    const paddingClasses = {
        none: '',
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8'
    };

    return (
        <div className={clsx(
            'bg-white rounded-xl shadow-sm border border-gray-200',
            padding !== 'none' && paddingClasses[padding],
            className
        )}>
            {children}
        </div>
    );
};

export default Card;
