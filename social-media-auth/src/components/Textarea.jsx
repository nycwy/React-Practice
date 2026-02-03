import React from 'react'

const Textarea = ({ id, value, placeholder, setValue }) => {

    return (
        <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            onChange={e => setValue(e.target.value)}>
        </textarea>
    )
}

export default Textarea