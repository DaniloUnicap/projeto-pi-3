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

            <div className='flex flex-col-reverse justify-end md:flex-row-reverse gap-4'>
                {cursos.modulos.map(modulo => (
                <div key={modulo.tituloModulo}>
                    <h2 className='text-xl font-bold mt-4 mb-2'>{modulo.tituloModulo}</h2>
                    {modulo.aulas.map(aula => (
                        <div key={aula.tituloAula}>
                            <button onClick={() => handleAulaClick(aula.url)}>
                                <p className='hover:bg-gray-500 p-2'>{aula.tituloAula}</p>
                            </button>
                        </div>
                    ))}
                </div>
            ))}

            {aulaAtual && (
                <iframe title="Aula atual" src={aulaAtual} className='w-full h-[400px] md:w-3/5'></iframe>
            )}
            </div>

            
        </div>
    );
};
