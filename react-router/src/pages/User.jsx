import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    const user = [
        {id: 1, name: 'Spiderman', age: 22},
        {id: 2, name: 'Superman', age: 23},
        {id: 3, name: 'Batman', age: 24},
        {id: 4, name: 'Ironman', age: 25}
    ]

    return (
        <>
            {user.map((data) => (
                <div key={data.id} className='px-7'>
                    <Link to={`/user/${data.id}`}><h2>{data.name}</h2></Link>
                </div>
            ))};
        </>
    )
}

export default User