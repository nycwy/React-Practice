import React from 'react'

const Textarea = ({ id, value, placeholder, setValue }) => {

    return (
        <textarea
            className="w-full resize-none rounded-md border border-gray-500 p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}>
        </textarea>
    )
}

export default Textarea