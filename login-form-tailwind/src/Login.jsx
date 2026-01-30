import React from 'react'

function Login() {
    return (
        <div className='bg-gray-700 p-8 rounded-lg shadow-2xl min-w-sm w-full'>
            <h2 className='text-center text-3xl text-white mb-6 font-bold'>Login</h2>
            <form action="">
                <div className='mb-4'>
                    <label className='block text-sm font-medium text-gray-300 mb-2' htmlFor="">Email</label>
                    <input className='w-full px-3 py-2 bg-gray-500 border-gray-600 focus:ring-2 focus:ring-teal-700 rounded-md text-white focus:outline-none' type="email" name='' placeholder='Email' id='' />
                </div>
                <div className='mb-6'>
                    <label className='block text-sm font-medium text-gray-300 mb-2' htmlFor="">Password</label>
                    <input className='w-full px-3 py-2 bg-gray-500 border-gray-600 focus:ring-2 focus:ring-teal-700 rounded-md text-white focus:outline-none' type="password" name='' placeholder='Password' id='' />
                </div>
                <button className='w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 shadow-2xl' type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login