import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeContext } from "../context/ThemeContext";
import "../App.css";

const apiUrls = {
    frontend: "https://parseapi.back4app.com/parse/classes/frontEnd",
    backend: "https://parseapi.back4app.com/parse/classes/backEnd",
    ferramentasageis: "https://parseapi.back4app.com/parse/classes/ferramentasAgeis",
    redes: "https://parseapi.back4app.com/parse/classes/redes"
};

const headers = {
    "X-Parse-Application-Id": "51nzUefY7CJCG3qJb5usAf0pxoYkKd38P8nzrLc4",
    "X-Parse-REST-API-Key": "yykJnk7ZKiPkcRgvVFKi22hy0NRpgzz4X3CoY5In",
};
const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

export const Cursos = () => {
    const { theme } = useContext(ThemeContext);
    const { categoria } = useParams();
    const [cursos, setCursos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrls[categoria], {
                    method: 'GET',
                    headers: headersJson
                });
                const data = await response.json();
                console.log("Dados retornados:", data); // Log dos dados recebidos
                setCursos(data.results); // Ajuste conforme a estrutura dos dados retornados pela API
                setLoading(false);
            } catch (error) {
                console.error('Erro:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [categoria]);

    if (loading) {
        return <div className='text-center mt-8'>Carregando...</div>;
    }

    if (cursos.length === 0) {
        return <div className='text-center mt-8'>Nenhum curso encontrado para a categoria {categoria}</div>;
    }

    return (
        <div className='px-4 md:px-16'>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Cursos de {categoria}</h1>
            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3'>
                {cursos.map(item => (
                    <Link to={`/cursos/${categoria}/${item.tituloCurso}`} key={item.objectId}>
                        <div className={`${theme === "light" ? "bg-gray-300 text-black" : "bg-[#242125] text-white"} w-[260px] mx-auto rounded-lg flex items-center py-2 px-4 transition-transform transform hover:scale-110 xl:w-[320px]`}>
                            <img src={item.iconeCurso} alt={item.tituloCurso} className='w-24' />
                            <h2 className='font-bold w-full text-center'>{item.tituloCurso}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
