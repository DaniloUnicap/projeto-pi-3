import { useState, useEffect } from 'react';
import hero from '../assets/sugestões/feedback.png';
import { Botao } from '../components/Botao';

const urls = {
    "sugestoes": "https://parseapi.back4app.com/parse/classes/Sugestoes",
};

const headers = {
    "X-Parse-Application-Id": "51nzUefY7CJCG3qJb5usAf0pxoYkKd38P8nzrLc4",
    "X-Parse-REST-API-Key": "yykJnk7ZKiPkcRgvVFKi22hy0NRpgzz4X3CoY5In",
};

const headersJson = {
    ...headers,
    "Content-Type": "application/json",
};

export const Sugestoes = () => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [comentarios, setComentarios] = useState([]);

    const handleSubmit = async () => {
        const data = {
            titulo: titulo,
            descricao: descricao,
        };

        try {
            const response = await fetch(urls.sugestoes, {
                method: 'POST',
                headers: headersJson,
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('Success:', result);
            setTitulo('');
            setDescricao('');
            fetchComentarios();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchComentarios = async () => {
        try {
            const response = await fetch(urls.sugestoes, {
                method: 'GET',
                headers: headers,
            });
            const result = await response.json();
            setComentarios(result.results);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchComentarios();
    }, []);

    return (
        <div className="px-4 md:px-48">
            <section className='grid grid-cols-1 gap-16 lg:grid-cols-2 lg:mt-12 lg:gap-4 lg:justify-center'>
                <div className=''>
                    <h1 className='text-4xl font-semibold text-center mt-8 mb-12 lg:text-start'>Faça sugestões de melhorias em nosso sistema</h1>
                    <p className='text-justify lg:text-start'>
                        Estamos comprometidos em fornecer um sistema que atenda às suas necessidades de forma eficiente e eficaz. Para continuarmos a evoluir e melhorar nossos serviços, gostaríamos de ouvir suas sugestões e ideias. Sua opinião é fundamental para nós, pois nos ajuda a identificar áreas de melhoria e implementar mudanças que realmente fazem a diferença para nossos usuários.
                    </p>
                </div>

                <div className=''>
                    <img src={hero} alt="" className='mx-auto' />
                </div>
            </section>

            <section className='mt-28 font-bold text-lg'>
                <h2 className='text-center mb-6'>Em qual ponto você acha que devemos melhorar?</h2>
                <div className='flex flex-col gap-6'>
                    <input
                        type="text"
                        placeholder='Título da sugestão'
                        className='bg-[#242125] rounded-md p-2 outline-none'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder='Faça sua sugestão aqui'
                        className='bg-[#242125] rounded-md p-2 outline-none'
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                    <div className='mx-auto'>
                        <button onClick={handleSubmit}>
                            <Botao prop={"Enviar sugestão"} />
                        </button>
                    </div>
                </div>
            </section>

            <section className='mt-24'>
                <h3 className='text-2xl'>Sugestões dos usuários</h3>
                {comentarios.map((com) => (
                    <div key={com.objectId} className='bg-[#242125] p-6 rounded-md my-4'>
                        <h4 className='font-bold text-lg'>{com.titulo}</h4>
                        <p className='mt-6'>{com.descricao}</p>
                    </div>
                ))}
            </section>
        </div>
    );
};
