import React from 'react'
import Home from './pages/Home'
import AllTasks from './pages/AllTasks'
import ImportantTasks from './pages/ImportantTasks'
import CompletedTasks from './pages/CompletedTasks'
import UncompletedTasks from './pages/UncompletedTasks'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-2 relative">

       {/* rotes to link all pages  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} >
          <Route index element={<AllTasks/>} />
          <Route path='/ImportantTasks' element={<ImportantTasks/>} />
          <Route path='/CompletedTasks' element={<CompletedTasks/>} />
          <Route path='/UncompletedTasks' element={<UncompletedTasks/>} />
          </Route>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App