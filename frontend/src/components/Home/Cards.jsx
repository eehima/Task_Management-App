import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaEdit } from 'react-icons/fa';
import {  IoAddCircleSharp } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
import { useState } from 'react';

const Cards = ({home, setInputData}) => {
     // Dummy data
    const data = [
        {
            title: "The quick brown fox jumps over the lazy dog",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga.",
            status: "Incomplete"
        },
        {
            title: "Assignments",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga.",
            status: "Complete"
        },
        {
            title: "Projects",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga.",
            status: "Incomplete"
        },
        {
            title: "Testnet Tasks",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga.",
            status: "Incomplete"
        }
    ];
    const [ImportantButton, setImportantButton] = useState("Uncomplete");
  return (
    <div className='grid grid-cols-3 gap-4'>

        {/* mapping through the data  */}

        {data && data.map((items, index) => (
            <div className='flex flex-col justify-between bg-gray-800 rounded-sm p-4'>
                <h2 className='text-xl font-semibold'>{items.title}</h2>
                <p className='text-gray-300 my-2'>{items.desc}</p>
                <div className='mt-4 w-full flex items-center'>

                    {/* changing the colour of the button based on the status  */}
                    <button 
                    className={` ${
                        items.status === "Incomplete" ? "bg-red-400" : "bg-green-700"
                        } p-2 rounded w-3/6`}
                        >
                        {items.status}
                        </button>

                        {/* adding icons to the button  */}
                        
                    <div className='text-white p-2 w-3/6 text-2xl font-semibold flex justify-around'>
                        <button>
                            <CiHeart/>
                        </button>
                        <button>
                            <FaEdit/>
                        </button>
                        <button>
                            <MdDelete/>
                        </button>
                    </div>
                </div>
            </div>
        ))}

         {/* adding a new task  */}

        {home === "true" && (
            <button className='flex flex-col justify-center items-center bg-gray-800 rounded-sm p-4 text-gray-300 hover:scale-105 hover:cursor-pointer transition duration-300' onClick={() => setInputData("fixed")}>
            <IoAddCircleSharp className='text-5xl'/>
            <h2 className='text-2xl mt-4'>Add Task</h2>
        </button>
        )}
    
    </div>
  )
}

export default Cards