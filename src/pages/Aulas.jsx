import { useParams } from 'react-router-dom'

export const Aulas = () => {

    const { titulo } = useParams();

    return (
        <div>
            <h1>Aula de {titulo}</h1>
        </div>
    )
}