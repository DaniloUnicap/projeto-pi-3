import { useParams } from 'react-router-dom';

export const Cursos = () => {

    const { categoria } = useParams();

    return (
        <div>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Cursos de {categoria}</h1>
        </div>
    )
}