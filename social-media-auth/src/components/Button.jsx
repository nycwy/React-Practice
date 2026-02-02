import React from 'react'

const Button = ({ text, onClick }) => {
    return <button className='no-underline' onClick={onClick}>{text}</button>;
}

export default Button