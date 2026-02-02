import React from 'react'

const Button = ({ text, onClick }) => {
    return (
        <div className='text-center'>
            <button className='bg-green-600 text-white px-4 py-2 rounded-md w-1/2 shadow-lg font-semibold hover:bg-green-700' onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button