import React, { useState, useRef, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import { Link } from 'react-router-dom';

const urls = {
    "frontend": "https://parseapi.back4app.com/parse/classes/frontEnd",
    "backend": "https://parseapi.back4app.com/parse/classes/backEnd",
    "ferramentasageis": "https://parseapi.back4app.com/parse/classes/ferramentasAgeis",
    "redes": "https://parseapi.back4app.com/parse/classes/redes",
};

const headers = {
    "X-Parse-Application-Id": "51nzUefY7CJCG3qJb5usAf0pxoYkKd38P8nzrLc4",
    "X-Parse-REST-API-Key": "yykJnk7ZKiPkcRgvVFKi22hy0NRpgzz4X3CoY5In",
};

const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

export const Aulas = () => {
    const { theme } = useContext(ThemeContext);
    const { categoria, curso } = useParams();
    const [cursos, setCursos] = useState(null);
    const [aulaAtual, setAulaAtual] = useState(null);
    const [verModulo, setVerModulo] = useState("Fechar módulos");
    const iframeRef = useRef(null);

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                console.log("Categoria:", categoria); // Log da categoria
                console.log("Curso:", curso); // Log do curso
                
                const categoriaLowerCase = categoria.toLowerCase();

                if (!urls[categoriaLowerCase]) {
                    throw new Error("Categoria não encontrada");
                }

                const res = await fetch(urls[categoriaLowerCase], {
                    method: 'GET',
                    headers: headersJson
                });

                if (!res.ok) {
                    throw new Error("Erro ao buscar os dados da API");
                }

                const json = await res.json();
                console.log("Resposta da API:", json); // Log da resposta da API

                const cursoEncontrado = json.results.find(c => c.tituloCurso === curso);
                if (!cursoEncontrado) {
                    throw new Error("Curso não encontrado na resposta da API");
                }

                setCursos(cursoEncontrado);
            } catch (error) {
                console.error('Erro:', error.message);
                setCursos(null);
            }
        };

        fetchCursos();
    }, [categoria, curso]);

    const toggleFullScreen = () => {
        const iframe = iframeRef.current;
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }
        }
    };

    const handleAulaClick = (url, tituloAula, materialAula, avModulo) => {
        setAulaAtual({ url, tituloAula, materialAula, avModulo });
    };

    const onToggleModulo = () => {
        const modulos = document.querySelector('.modulos');
        modulos.classList.toggle('hidden');
        setVerModulo(verModulo === "Fechar módulos" ? "Exibir módulos" : "Fechar módulos");
    };

    if (!cursos) {
        return <div>Carregando...</div>;
    }

    return (
        <div className='px-4 md:px-16 '>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Aulas do curso de {curso}</h1>
            <div className='flex justify-center lg:hidden'>
                <button onClick={onToggleModulo} className='text-center cursor-pointer mb-8 bg-sky-600 w-56 px-2 md:px-8 py-2 rounded-lg hover:bg-sky-400 transition-all ease-linear'>{verModulo}</button>
            </div>

            <div className='flex flex-row-reverse gap-4 lg:justify-around'>
                <div className={`${theme === "ligth" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} modulos absolute md:static p-4 rounded-md`}>
                    {cursos.modulos && cursos.modulos.map((modulo, moduloIndex) => (
                        <div key={moduloIndex}>
                            {modulo.modulos && modulo.modulos.map((submodulo, submoduloIndex) => (
                                <div key={submodulo.tituloModulo + submoduloIndex}>
                                    <div className='relative overflow-hidden'>
                                        <h2 className={`${theme === "ligth" ? "bg-gray-400 text-black" : "bg-[#1C1A1D] text-white"} text-lg font-bold mt-4 mb-2 py-4 pl-4 pr-12`}>
                                            {submodulo.tituloModulo}
                                        </h2>
                                        <input type="checkbox"
                                            className='peer absolute top-6 opacity-0 inset-x-0 w-full h-12 z-10 cursor-pointer'
                                        />
                                        <div className='text-sky-600 absolute top-[34px] right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                        </div>
                                        {submodulo.aulas && submodulo.aulas.map((aula, aulaIndex) => (
                                            <div key={submodulo.tituloModulo + "-" + aula.tituloAula + "-" + aulaIndex} className='overflow-hidden transition-all duration-300 max-h-0 peer-checked:max-h-[9900px]'>
                                                <button onClick={() => handleAulaClick(aula.url, aula.tituloAula, aula.materialAula, aula.avModulo)} className='w-full text-start'>
                                                    <p className='transition-all duration-300 hover:text-sky-600 p-2'>{aula.tituloAula}</p>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

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
                            {aulaAtual.avModulo && (
                                <div>
                                    <Link to="/avaliacao">
                                        <a className='bg-sky-600 py-2 px-4 rounded-md cursor-pointer hover:bg-sky-400 transition-all ease-linea' href={aulaAtual.avModulo}>Teste de aprendizado</a>
                                    </Link>
                                    
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
