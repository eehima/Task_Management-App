import React from 'react'
import Cards from '../components/Home/Cards'
import {  IoAddCircleSharp } from 'react-icons/io5';
import InputData from '../components/Home/InputData';
import { useState } from 'react';
const AllTasks = () => {
    const [inputData, setInputData] = useState("hidden");
  return (
   <>
    <div>
        <div className='w-full flex justify-end px-4 py-2'>
            <button onClick={() => setInputData("fixed")}>
                <IoAddCircleSharp className='text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300'/>
            </button>
        </div>
        <Cards home={"true"} setInputData={setInputData}/>
    </div>
    <InputData inputData={inputData} setInputData={setInputData}/>
   </>
  )
}

export default AllTasks