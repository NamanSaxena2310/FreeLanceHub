import React from 'react'
import ClientCard from './ClientCard'
import Modal from './Modal'
import {useState} from 'react'
const ClientList = () => {
  const [isModalOpen, setisModalOpen] = useState(false)

  const toggleModal = ()=>{
    setisModalOpen(!isModalOpen)
  }

  return (
    <div>
      {
        isModalOpen ? <Modal onClose={toggleModal}/> : null
      }
      <div className='grid grid-cols-3 gap-8'>
      {/* Mapping functionn  */}
      <ClientCard/>
    </div>
     <button onClick={toggleModal}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition duration-200"
      >
        + Add Client
      </button>
    
      
    </div>
  )
}

export default ClientList
