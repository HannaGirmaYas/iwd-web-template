import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExperienceList from './components/ExperienceList'
import Title from './components/Title'

function App() {
  

  return (
    <>

    
     <div className='h-screen '>

     {/* Add Header */}
      <Header />


      <Title />

     {/* Add Experience Section */}
     <ExperienceList />


     </div>
    </>
  )
}

export default App
