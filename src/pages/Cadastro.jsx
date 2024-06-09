import React, { useState, useContext } from 'react';
import { headersJson } from '../data/headers';
import { ThemeContext } from '../context/ThemeContext';

export const Cadastro = () => {
    const { theme } = useContext(ThemeContext);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = async () => {
        const userData = {
            username: nome,
            email: email,
            password: senha
        };

        try {
            const response = await fetch('https://parseapi.back4app.com/users', {
                method: 'POST',
                headers: headersJson,
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                alert('Usuário cadastrado com sucesso!');
            } else {
                const errorData = await response.json();
                alert('Erro ao cadastrar usuário: ' + errorData.error);
            }
        } catch (error) {
            alert('Erro ao cadastrar usuário: ' + error.message);
        }
    };

    return (
        <div className='flex justify-center items-center'>
            <div className={`${theme === "light" ? "bg-[#EBEBEF] text-black" : "bg-[#37373C] text-white"} p-6 rounded-lg`}>
                <h1 className='text-center font-bold mb-4'>Criar conta</h1>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h2>Nome completo</h2>
                        <input
                            type="text"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={`${theme === "light" ? "bg-[#FFFFFF] text-black" : "bg-[#27272A] text-white"} outline-none rounded-md px-4 py-1`}
                        />
                    </div>
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
                        onClick={handleCadastro}
                        className='bg-sky-600 px-2 md:px-12 py-1 rounded-lg hover:bg-sky-400 transition-all ease-linear'>Cadastrar
                    </button>
                </div>
            </div>
        </div>
    );
};
