import { useState, useEffect, useContext } from 'react';
import hero from '../assets/sugestões/feedback.png';
import { Botao } from '../components/Botao';
import { ThemeContext } from "../context/ThemeContext";
import urls from '../data/urls';
import { headersJson } from '../data/headers';




export const Feedback = () => {
    const { theme } = useContext(ThemeContext);
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [comentarios, setComentarios] = useState([]);
    const [editando, setEditando] = useState(false);
    const [idEditando, setIdEditando] = useState(null);

    const handleSubmit = async () => {
        const data = {
            titulo: titulo,
            descricao: descricao,
        };

        if (editando) {
            await handleEdit(idEditando, data);
        } else {
            await handleCreate(data);
        }
        
        setTitulo('');
        setDescricao('');
        setEditando(false);
        setIdEditando(null);
    };

    const handleCreate = async (data) => {
        try {
            const response = await fetch(urls.feedback, {
                method: 'POST',
                headers: headersJson,
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('Success:', result);
            fetchComentarios();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleEdit = async (id, data) => {
        try {
            const response = await fetch(`${urls.feedback}/${id}`, {
                method: 'PUT',
                headers: headersJson,
                body: JSON.stringify(data),
            });
            const result = await response.json();
            console.log('Edit success:', result);
            fetchComentarios();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${urls.feedback}/${id}`, {
                method: 'DELETE',
                headers: headersJson,
            });
            console.log('Delete success');
            fetchComentarios();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const fetchComentarios = async () => {
        try {
            const response = await fetch(urls.feedback, {
                method: 'GET',
                headers: headersJson,
            });
            const result = await response.json();
            setComentarios(result.results);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const startEditing = (id, titulo, descricao) => {
        setTitulo(titulo);
        setDescricao(descricao);
        setEditando(true);
        setIdEditando(id);
    };

    useEffect(() => {
        fetchComentarios();
    }, []);

    return (
        <div className="px-4 md:px-48">
            <section className='grid grid-cols-1 gap-16 lg:grid-cols-2 lg:mt-12 lg:gap-4 lg:justify-center'>
                <div className=''>
                    <h1 className='text-4xl font-semibold text-center mt-8 mb-12 lg:text-start'>O seu feedback é de extrema importância para a nossa equipe</h1>
                    <p className='text-justify lg:text-start'>
                        Estamos comprometidos em fornecer um sistema que atenda às suas necessidades de forma eficiente e eficaz. Para continuarmos a evoluir e melhorar nossos serviços, gostaríamos de ouvir suas sugestões e ideias. Sua opinião é fundamental para nós, pois nos ajuda a identificar áreas de melhoria e implementar mudanças que realmente fazem a diferença para nossos usuários.
                    </p>
                </div>

                <div className=''>
                    <img src={hero} alt="" className='mx-auto' />
                </div>
            </section>

            <section className='mt-28 font-bold text-lg'>
                <h2 className='text-center mb-6'>Conte o que você acha do nosso sistema</h2>
                <div className='flex flex-col gap-6'>
                    <input
                        type="text"
                        placeholder='Título do feedback'
                        className={`${theme === "light" ? "bg-[#EBEBEF] text-black" : "bg-[#37373C] text-white"} rounded-md p-2 outline-none`}
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <textarea
                        placeholder='Descrição do feedback'
                        className={`${theme === "light" ? "bg-[#EBEBEF] text-black" : "bg-[#37373C] text-white"} rounded-md p-2 outline-none`}
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                    />
                    <div className='mx-auto'>
                        <button onClick={handleSubmit}>
                            <Botao prop={editando ? "Salvar feedback" : "Enviar feedback"} />
                        </button>
                    </div>
                </div>
            </section>

            <section className='mt-24'>
                <h3 className='text-2xl'>Feedbacks dos usuários</h3>
                {comentarios.map((com) => (
                    <div key={com.objectId} className={`${theme === "light" ? "bg-[#EBEBEF] text-black" : "bg-[#37373C] text-white"} p-6 rounded-md my-4`}>
                        <h4 className='font-bold text-lg'>{com.titulo}</h4>
                        <p className='mt-6'>{com.descricao}</p>
                        <div className='mt-4 flex gap-4'>
                            <button onClick={() => startEditing(com.objectId, com.titulo, com.descricao)}>Editar</button>
                            <button onClick={() => handleDelete(com.objectId)}>Apagar</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};
