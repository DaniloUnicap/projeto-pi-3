import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { cursosFront, cursosBack, cursosFerramentasAgeis, cursosRedes } from '../data/cursos';

export const Aulas = () => {
    const { curso } = useParams();
    const [aulaAtual, setAulaAtual] = useState(null);

    let cursos;

    switch (curso) {
        case "HTML5 e CSS3":
        case "Javascript":
            cursos = cursosFront.find(item => item.curso === curso);
            break;
        case "PHP":
            cursos = cursosBack.find(item => item.curso === curso);
            break;

        default:
            return <div>Curso não encontrado</div>;
    }

    if (!cursos) {
        return <div>Curso não encontrado</div>;
    }

    const handleAulaClick = (url) => {
        setAulaAtual(url);
    };

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Aulas do curso de {curso}</h1>

            <div className='flex flex-col-reverse  justify-end md:flex-row-reverse'>
                <div className='flex flex-col mx-auto bg-[#161616] p-4 rounded-md '>

                    {cursos.modulos.map(modulo => (
                        <div key={modulo.tituloModulo}>
                            <div className='relative overflow-hidden '>

                                <h2
                                    className='text-lg font-bold mt-4 mb-2 bg-[#1C1A1D] p-4'>
                                    {modulo.tituloModulo}
                                </h2>

                                <input type="checkbox"
                                    className='peer absolute top-6 opacity-0  inset-x-0 w-full h-12  z-10 cursor-pointer'
                                />

                                <div className='text-sky-600 absolute top-4 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </div>


                                {modulo.aulas.map(aula => (
                                    <div key={aula.tituloAula} className='overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-[9900px]'>
                                        <button onClick={() => handleAulaClick(aula.url)} className='w-full text-start'>
                                            <p className='transition-all duration-300 hover:text-sky-600 p-2'>{aula.tituloAula}</p>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                {aulaAtual && (
                    <iframe title="Aula atual" src={aulaAtual} className='w-full h-[400px] md:w-3/5' ></iframe>
                )}


            </div>


        </div>
    );
};
