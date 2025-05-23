import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Authentication from './pages/Authentication'

  import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/Dashboard';


function App() {


  return (
    
    <>
    <ToastContainer/>
    <Routes>
      <Route path='/'  element = {<Authentication/>} />
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App
