import React from 'react'
import { Link } from "react-router-dom";

const Already = ({ text, link, linkText }) => {
    return (
        <div>
            <p>{text}</p>
            <Link to={link}>{linkText}</Link>
        </div>
    )
}

export default Already;