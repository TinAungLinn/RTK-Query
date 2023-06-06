import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './components/Blogs'
import Detail from './components/Detail'
import Create from './components/Create'
import Edit from './components/Edit'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Blogs/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
    </div>
  )
}

export default App
