import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        // form for signup page 
        <div className='h-[98vh] flex items-center justify-center'>
            <div className='p-4 w-2/6 rounded bg-gray-800'>
                <div className='text-2xl font-semibold'>Signup</div>
                <input
                    type="username"
                    placeholder='username'
                    name='username'
                    className='bg-gray-700 px-3 py-2 rounded w-full my-3'
                />
                <input
                    type="email"
                    placeholder='email'
                    name='xyz@gmail.com'
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
                        Signup
                    </button>
                    <Link to="/Login" className='text-gray-400 hover:text-gray-200'> Already have an account? Login here</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup