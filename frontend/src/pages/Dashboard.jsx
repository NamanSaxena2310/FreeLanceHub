import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Dashboard = () => {
  const {token} = useContext(AppContext)
  console.log(token)
  return (
    <div>
      Hi I am Dashboard
    </div>
  )
}

export default Dashboard
