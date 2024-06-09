import { Link } from 'react-router-dom';
import { Botao } from '../components/Botao';
import { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import logo from '../assets/nav/logo.png';

export const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [icone, setIcone] = useState("menu");

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIcone(icone === "menu" ? "close" : "menu");
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIcone("menu");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert("Você saiu da sua conta.");
  };

  return (
    <nav className='flex z-10 justify-around mx-auto items-center py-6 px-4 md:px-16 max-w-[1920px]'>
      <Link to="/"><img src={logo} alt="logo" className='w-20 ' /></Link>

      <div className={`absolute  ${theme === "light" ? "bg-gray-200 text-black" : "bg-[#242125]"} lg:bg-transparent  min-h-[45vh] left-0 z-10 ${isMenuOpen ? 'top-[10%]' : 'top-[-100%]'} w-full flex items-center px-4 lg:static lg:items-center lg:min-h-fit lg:w-auto duration-500 gap-12 flex-col lg:flex-row justify-center`}>
        <div className=''>
          <ul className='flex flex-col items-center lg:flex-row gap-4'>
            <Link to="/" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Início</li></Link>
            <Link to="/trilhas" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Trilhas</li></Link>
            <Link to="/colabore" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Colabore</li></Link>
            <Link to="/feedback" onClick={handleCloseMenu}><li className='text-xl font-bold transition-all hover:text-sky-600'>Feedback</li></Link>
            <li>
              <button onClick={toggleTheme} className='text-xl font-bold transition-all hover:text-sky-600 flex items-center'>
                {theme === "light" ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>

        <div className='flex flex-col lg:flex-row gap-6'>
          {!isAuthenticated ? (
            <>
              <Link to="entrar" className='border-2 border-sky-600 rounded-lg px-4 py-1 text-center'>Entrar</Link>
              <Link to="cadastrar"><Botao prop="Cadastre-se" /></Link>
            </>
          ) : (
            <button onClick={handleLogout} className='border-2 border-red-600 rounded-lg px-4 py-2'>Sair</button>
          )}
        </div>
      </div>

      <div className='lg:hidden'>
        <div className='flex justify-end lg:hidden'>
          <div className="text-5xl cursor-pointer " >
            <ion-icon name={icone} onClick={onToggleMenu}></ion-icon>
          </div>
        </div>
      </div>
    </nav>
  );
};
