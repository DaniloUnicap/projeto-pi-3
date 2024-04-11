import { useState } from 'react'
import menu from '../src/assets/nav/menu.png'
import { Inicio } from './pages/Inicio'
import { Trilhas } from './pages/Trilhas'
import {Nav} from '../src/components/Nav';
import { Routes, Route, Link } from 'react-router-dom';
import { Cursos } from './pages/Cursos';
import { Aulas } from './pages/Aulas';


function App() {

  return (
    <div className='text-white'>
      <Nav/>
      <div className='flex justify-end md:hidden'>
        <img src={menu} alt="logo menu" className='w-12 cursor-pointer' />
      </div>

      <main>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/trilhas' element={<Trilhas />}></Route>
          <Route path="/cursos/:categoria" element={<Cursos/>} />
          <Route path="/cursos/:categoria/:titulo" element={<Aulas />} />

          
        </Routes>
      </main>
    </div>
  )
}

export default App
