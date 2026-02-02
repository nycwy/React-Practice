import React from 'react'

const Heading = ({ headingText, text }) => {
    return (
        <div>
            <h2>{headingText}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Heading