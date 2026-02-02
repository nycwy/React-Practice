import React from 'react'
import { Link } from "react-router-dom";

const Already = ({ text, link, linkText }) => {
    return (
        <div>
            <p>{text}</p>
            <Link className='text-blue-800 font-medium hover:underline' to={link}>{linkText}</Link>
        </div>
    )
}

export default Already;