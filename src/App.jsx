import React from 'react';
import { Inicio } from './pages/Inicio'
import { Trilhas } from './pages/Trilhas'
import { Nav } from '../src/components/Nav';
import { Routes, Route} from 'react-router-dom';
import { Cursos } from './pages/Cursos';
import { Aulas } from './pages/Aulas';
import { Footer } from './components/Footer';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { Colabore } from './pages/Colabore';
import { TesteModulo } from './components/TesteModulo';
import { Feedback } from './pages/Feedback';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { AuthProvider } from './context/AuthContext';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <AuthProvider>
    <div className={` font-[Poppins] ${theme === "light" ? "bg-[#FFFFFF] text-black" : "text-white"} max-w-[1920px] mx-auto`}>
      <Nav />

      <main>

        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/trilhas' element={<Trilhas />}></Route>
          <Route path="/cursos/:categoria" element={<Cursos />} />
          <Route path="/cursos/:categoria/:curso" element={<Aulas />} />
          <Route path="/cursos/:categoria/:curso/aula/:id" element={<Aulas />} />
          <Route path='colabore' element={<Colabore/>}></Route>
          <Route path='/avaliacao' element={<TesteModulo/>}></Route>
          <Route path='/feedback' element={<Feedback/>}></Route>
          <Route path='/entrar' element={<Login/>}></Route>
          <Route path='/cadastrar' element={<Cadastro/>}></Route>

        </Routes>

      </main>

      <Footer />

    </div>
    </AuthProvider>
  )
}

export default App
