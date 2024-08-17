import React from 'react';
import Link from 'next/link';

const Button = ({ children, href, variant = 'primary', disabled = false, className = '', type = 'button' }) => {
    const baseStyle = 'px-4 py-2 rounded-lg font-medium transition-all duration-200 ease-in-out focus:outline-none';

    const variants = {
        primary: 'bg-button text-white hover:bg-hover disabled:bg-blue-400',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700 disabled:bg-gray-400',
        success: 'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400',
        danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-400',
    };

    const variantStyle = variants[variant] || variants.primary;

    return (
        <Link href={href} className={`${baseStyle} ${variantStyle} ${className}`} disabled={disabled}>
                {children}
        </Link>
    );
};

export default Button;
