import React from 'react'
import { CgNotes } from 'react-icons/cg';
import { MdLabelImportant } from 'react-icons/md';
import { FaCheckDouble } from 'react-icons/fa6';
import { TbNotebookOff } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const data = [
        {
            title: "All Tasks",
            icon: <CgNotes/>,
            link: "/"
        
        },
        {
            title: "Important Tasks",
            icon: <MdLabelImportant/>,
            link: "/ImportantTasks"
        },
        {
            title: "Completed Tasks",
            icon: <FaCheckDouble/>,
            link: "/CompletedTasks"
        },
        {
            title: "Uncompleted Tasks",
            icon: <TbNotebookOff/>,
            link: "/UncompletedTasks"
        },
    ];
  return (
    <>
        <div>
            <h2 className='text-xl font-semibold'>Ephraim Task</h2>
            <h4 className='mb-1 text-gray-400'>ehima87@gmail.com</h4>
            <hr />
        </div>
        <div>
            {data.map((items, index) => (
                <Link to={items.link} key={index} className='my-2 flex items-center hover:bg-gray-500 p-2 rounded transition-all duration-300'> 
                {items.icon}&nbsp;  {items.title}
                </Link>
            ))}
        </div>
        <div>
            <button className='bg-gray-600 w-full p-2 rounded'>Log Out</button>
        </div>
    </>
  )
}

export default Sidebar
