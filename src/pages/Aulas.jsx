import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { cursosFront, cursosBack, cursosFerramentasAgeis, cursosRedes } from '../data/cursos';
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const Aulas = () => {
    const { theme } = useContext(ThemeContext);
    const { curso } = useParams();
    const [aulaAtual, setAulaAtual] = useState(null);
    const iframeRef = useRef(null);

    const toggleFullScreen = () => {
        const iframe = iframeRef.current;

        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                /* Firefox */
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                /* Chrome, Safari & Opera */
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                /* IE/Edge */
                iframe.msRequestFullscreen();
            }
        }
    };

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

    const handleAulaClick = (url, tituloAula, materialAula) => {
        setAulaAtual({ url, tituloAula, materialAula });
    };

    const [verModulo, setVerModulo] = useState("Fechar módulos")

    const onToggleModulo = () => {
        const modulos = document.querySelector('.modulos');
        modulos.classList.toggle('hidden')
        setVerModulo(verModulo === "Fechar módulos" ? "Exibir módulos" : "Fechar módulos");
    }

    return (
        <div className='px-4 md:px-16 '>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Aulas do curso de {curso}</h1>
            <div className='flex justify-center lg:hidden'>
                <button onClick={onToggleModulo} className='text-center cursor-pointer mb-8 bg-sky-600 w-56 px-2 md:px-8 py-2 rounded-lg hover:bg-sky-400 transition-all ease-linear'>{verModulo}</button>

            </div>

            {/* Módulo, aula, tópico */}
            <div className='flex flex-row-reverse gap-4 lg:justify-around'>

                {/* Módulo */}
                <div className={`${theme === "ligth" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} modulos absolute md:static  p-4 rounded-md`}>

                    {cursos.modulos.map(modulo => (
                        <div key={modulo.tituloModulo}>
                            <div className='relative overflow-hidden '>

                                <h2
                                    className={`${theme === "ligth" ? "bg-gray-400 text-black" : "bg-[#1C1A1D] text-white"} text-lg font-bold mt-4 mb-2  py-4 pl-4 pr-12`}>
                                    {modulo.tituloModulo}
                                </h2>

                                <input type="checkbox"
                                    className='peer absolute top-6 opacity-0 inset-x-0 w-full h-12  z-10 cursor-pointer'
                                />

                                <div className='text-sky-600 absolute top-[34px] right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                </div>

                                {modulo.aulas.map(aula => (
                                    <div key={aula.tituloAula} className='overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-[9900px]'>
                                        <button onClick={() => handleAulaClick(aula.url, aula.tituloAula, aula.materialAula)} className='w-full text-start'>
                                            <p className='transition-all duration-300 hover:text-sky-600 p-2'>{aula.tituloAula}</p>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Aula */}
                <div className='w-full h-[600px] lg:w-3/5'>
                    {aulaAtual && (
                        <div>
                            <iframe title="Aula atual" src={aulaAtual.url} ref={iframeRef} className='w-full h-[250px] md:h-[300px] lg:h-[400px]'></iframe>
                            <div className='flex justify-between'>
                                <h2 className='my-4 text-lg font-bold'>{aulaAtual.tituloAula}</h2>
                                <button onClick={toggleFullScreen}>[Tela cheia]</button>
                            </div>


                            {aulaAtual.materialAula && (
                                <div>
                                    <a className='bg-sky-600 py-2 px-4 rounded-md cursor-pointer hover:bg-sky-400 transition-all ease-linea' href={aulaAtual.materialAula} download>Baixar Material</a>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tópico */}
                    {/* <div className='mt-12'>
                        <h2 className='mb-6 text-lg font-bold'>Tópicos da aula</h2>

                        <div className='bg-[#242125] p-2 flex items-center gap-8 cursor-pointer mb-6 rounded-md'>
                            <div className='bg-gray-400 h-16 w-16 rounded-full'>
                            </div>
                            <h3>Título do tópico / Dúvida sobre a aula</h3>
                        </div>
                        <div className='bg-[#242125] p-2 flex items-center gap-8 cursor-pointer mb-6 rounded-md'>
                            <div className='bg-red-400 h-16 w-16 rounded-full'>
                            </div>
                            <h3>Título do tópico / Dúvida sobre a aula</h3>
                        </div>
                    </div> */}

                </div>
            </div>

        </div>
    );
};
