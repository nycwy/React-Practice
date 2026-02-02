import React from 'react'

const Input = ({ type, value, placeholder, setValue }) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default Input