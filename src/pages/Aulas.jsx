import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { cursosFront, cursosBack, cursosFerramentasAgeis, cursosRedes } from '../data/cursos';

export const Aulas = () => {
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

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Aulas do curso de {curso}</h1>

            <div className='flex flex-col-reverse justify-end md:flex-row-reverse md:justify-around'>
                <div className='flex flex-col  bg-[#161616] p-4 rounded-md '>

                    {cursos.modulos.map(modulo => (
                        <div key={modulo.tituloModulo}>
                            <div className='relative overflow-hidden '>

                                <h2
                                    className='text-lg font-bold mt-4 mb-2 bg-[#1C1A1D] py-4 pl-4 pr-12'>
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

                <div className='w-full h-[400px] md:w-3/5'>

                    {aulaAtual && (
                        <div>
                            <iframe title="Aula atual" src={aulaAtual.url} ref={iframeRef} className='w-full h-[400px]'></iframe>
                            <div className='flex justify-between'>
                                <h2 className='my-4 text-lg font-bold'>{aulaAtual.tituloAula}</h2>
                                <button onClick={toggleFullScreen}>[Tela cheia]</button>
                            </div>


                            {aulaAtual.materialAula && (
                                <div>
                                    <a className='bg-sky-600 py-2 px-4 rounded-md cursor-pointer' href={aulaAtual.materialAula} download>Baixar Material</a>
                                </div>
                            )}

                        </div>

                    )}

                </div>




            </div>


        </div>
    );
};
