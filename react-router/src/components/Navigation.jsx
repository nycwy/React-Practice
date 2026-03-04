import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <div className='flex justify-between px-7 py-4 bg-cyan-200'>
                <div>
                    <h2>Logo</h2>
                </div>
                <div className='space-x-6'>
                    <NavLink className={({isActive}) => isActive && `px-3 py-2 bg-black text-white rounded-md`} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive && `px-3 py-2 bg-black text-white rounded-md`} to='/about'>About</NavLink>
                    <NavLink className={({isActive}) => isActive && `px-3 py-2 bg-black text-white rounded-md`} to='/contact'>Contact</NavLink>
                    <NavLink className={({isActive}) => isActive && `px-3 py-2 bg-black text-white rounded-md`} to='/user'>User</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navigation