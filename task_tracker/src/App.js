import React from 'react'
import './index.css'
import Tasks from './components/Tasks'

import Header from './components/Header'

const App = () =>{

  return (
    <div className='container'>
      <Header title='Task Tracker' />
      <Tasks />
    </div>
  )
}

export default App