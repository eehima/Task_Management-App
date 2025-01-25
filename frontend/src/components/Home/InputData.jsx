import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const InputData = ({inputData, setInputData}) => {
    return (
        <>
        {/* form to collect data to addtask  */}
            <div className={` ${inputData} top-0 left-0 bg-gray-500 opacity-80 w-full h-screen`}
            ></div>
            <div className={` ${inputData} top-0 left-0 flex items-center justify-center w-full h-screen`}>
                <div className='w-2/6 bg-gray-900 p-4 rounded'>
                <div className='flex justify-end '>
                    <button className='text-2xl' onClick={() => setInputData("hidden")}>
                        <RxCross2/>
                    </button>
                </div>
                    <input
                        type="text"
                        placeholder='Title'
                        name='title'
                        className='px-3 py-2 rounded w-full bg-gray-700'
                    />
                    <textarea
                        name="desc"
                        cols="30"
                        rows="10"
                        placeholder='Description'
                        className='px-3 py-2 rounded w-full bg-gray-700 my-3'
                    ></textarea>
                    <button className='px-3 py-2 bg-blue-400 rounded text-black text-xl font-semibold'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default InputData