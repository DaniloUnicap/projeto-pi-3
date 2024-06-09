import React, { useState, useContext } from 'react';
import { headers } from '../data/headers';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export const Login = () => {
    const { theme } = useContext(ThemeContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);

    const handleLogin = async () => {
        const url = new URL('https://parseapi.back4app.com/login');
        url.searchParams.append('username', email);
        url.searchParams.append('password', senha);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    ...headers,
                    "X-Parse-Revocable-Session": "1"
                }
            });

            if (response.ok) {
                const userData = await response.json();
                alert('Login realizado com sucesso!');
                console.log('User data:', userData);
                setIsAuthenticated(true);
            } else {
                const errorData = await response.json();
                alert('Erro ao fazer login: ' + errorData.error);
            }
        } catch (error) {
            alert('Erro ao fazer login: ' + error.message);
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div className={`${theme === "light" ? "bg-[#EBEBEF] text-black" : "bg-[#37373C] text-white"} p-6 rounded-lg`}>
                <h1 className='text-center font-bold mb-4'>Login</h1>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2>E-mail</h2>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${theme === "light" ? "bg-[#FFFFFF] text-black" : "bg-[#27272A] text-white"} outline-none rounded-md px-4 py-1`}
                        />
                    </div>
                    <div>
                        <h2>Senha</h2>
                        <input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className={`${theme === "light" ? "bg-[#FFFFFF] text-black" : "bg-[#27272A] text-white"} outline-none rounded-md px-4 py-1`}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={handleLogin}
                        className='bg-sky-600 px-2 md:px-12 py-1 rounded-lg hover:bg-sky-400 transition-all ease-linear'>Entrar
                    </button>
                    <div className='flex flex-col items-center text-sm'>
                        <h3 >Não possui conta?</h3>
                        <Link to="/cadastrar" className='underline'>Cadastre-se</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
