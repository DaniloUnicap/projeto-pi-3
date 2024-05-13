import { useParams } from 'react-router-dom'
import { cursosFront, cursosBack, cursosFerramentasAgeis, cursosRedes } from '../data/cursos'
import "../App.css"
import { Link } from "react-router-dom"

export const Cursos = () => {

    const { categoria } = useParams();
    let cursos;
    if (categoria === 'frontend') {
        cursos = cursosFront;
    } else if (categoria === 'backend') {
        cursos = cursosBack;
    } else if (categoria === 'ferramentasageis') {
        cursos = cursosFerramentasAgeis;
    } else if (categoria === 'redes') {
        cursos = cursosRedes;
    }

    return (
        <div className='px-4 md:px-16 '>
            <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Cursos de {categoria}</h1>
            <div className=' grid grid-cols-1 gap-y-8  lg:grid-cols-3'>
                {cursos.map(item => (
                    <Link to={`/cursos/${categoria}/${item.curso}`} key={item.titulo}>
                    <div className='bg-[#242125] w-[260px] mx-auto rounded-lg flex items-center py-2 px-4 transition-transform transform hover:scale-110 xl:w-[320px]'>
                      <img src={item.imagem} alt={item.titulo} className='w-24' />
                      <h2 className='font-bold w-full text-center'>{item.curso}</h2>
                    </div>
                  </Link>
                ))}
            </div>

        </div>
    )
}