import React, { useContext } from 'react'
import { PromptContext } from '../context/PromptContext'

const Dashboard = () => {
  const {token} = useContext(PromptContext)
  console.log(token)
  return (
    <div>
      Hi I am Dashboard
    </div>
  )
}

export default Dashboard
