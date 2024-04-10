import {Link } from 'react-router-dom';
import { Botao } from '../components/Botao';

export const Nav = () => {
    return(
        <nav className='hidden md:flex justify-between items-center py-6'>
        <p className='text-3xl font-bold'>LOGO</p>

        <div className='flex gap-8 items-center'>
          <ul className='flex gap-4'>
            <Link to="/"><li className='text-xl font-bold'>Início</li></Link>
            <Link to="/trilhas"><li className='text-xl font-bold'>Trilhas</li></Link>
            <Link to="/colabore"><li className='text-xl font-bold'>Colabore</li></Link>
          </ul>

          <div className='flex gap-6'>
            <button className='border-2 border-sky-600 rounded-lg px-4 py-1'>Entrar</button>
            <Botao prop="Cadastre-se" />
          </div>
        </div>

      </nav>
    )
}