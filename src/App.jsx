import { useState } from 'react'

import { Inicio } from './pages/Inicio'
import { Trilhas } from './pages/Trilhas'
import { Nav } from '../src/components/Nav';
import { Routes, Route, Link } from 'react-router-dom';
import { Cursos } from './pages/Cursos';
import { Aulas } from './pages/Aulas';
import { Footer } from './components/Footer';
// import { bg } from '../src/assets/bg.jpeg'
//Teste


function App() {

  return (
    <div className='text-white bg-[#1C1A1D] font-[Poppins]'>
      <Nav />

      <main className='max-w-[1920px] mx-auto'>

        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/trilhas' element={<Trilhas />}></Route>
          <Route path="/cursos/:categoria" element={<Cursos />} />
          <Route path="/cursos/:categoria/:curso" element={<Aulas />} />
          <Route path="/cursos/:categoria/:curso/aula/:id" element={<Aulas />} />
        </Routes>

      </main>

      <Footer/>

    </div>
  )
}

export default App
