import React from 'react'
import { twMerge } from 'tailwind-merge';

const Input = ({ type, value, placeholder, setValue }) => {
    return (
        <input
            className={twMerge("w-full px-3 py-2 bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md focus:outline-none focus:border-transparent shadow-sm")}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
        />
    );
}

export default Input