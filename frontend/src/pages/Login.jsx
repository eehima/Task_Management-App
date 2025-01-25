import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        // form for login page
        <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-2/6 rounded bg-gray-800'>
                <div className='text-2xl font-semibold'>Login</div>
                <input
                    type="username"
                    placeholder='username'
                    name='username'
                    className='bg-gray-700 px-3 py-2 rounded w-full my-3'
                />
                <input
                    type="password"
                    placeholder='password'
                    name='password'
                    className='bg-gray-700 px-3 py-2 rounded w-full my-3'
                />
                <div className='w-full flex items-center justify-between'>
                    <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold'>
                        Login
                    </button>
                    <Link to="/Signup" className='text-gray-400 hover:text-gray-200'> Don't have an account? Signup here</Link>
                </div>
            </div>
        </div>
    )
}

export default Login