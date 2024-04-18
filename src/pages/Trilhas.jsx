import { Botao } from "../components/Botao"
import imgFront from "../assets/trilhas/imgFront.png"
import imgBack from "../assets/trilhas/imgBack.png"
import imgFerramentas from "../assets/trilhas/imgFerramentas.png"
import imgRedes from "../assets/trilhas/imgRedes.png"
import "../App.css"
import { Link } from "react-router-dom"

export const Trilhas = () => (
    <div>
        <h1 className="text-4xl font-semibold text-center mt-8 mb-12">Trilhas de conhecimento</h1>

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-6">
            <div className="min-w-[280px] max-w-[400px] mx-auto p-6 sombra flex flex-col gap-6 rounded-lg">
                <img src={imgFront} alt="" />
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                </p>

                <Link to="/cursos/frontend" className="mx-auto">
                        <Botao prop="Iniciar" />
                </Link>
            </div>
            <div className="min-w-[280px] max-w-[400px] mx-auto p-6 sombra flex flex-col gap-6 rounded-lg">
                <img src={imgBack} alt="" />
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                </p>

                <Link to="/cursos/backend" className="mx-auto">
                        <Botao prop="Iniciar" />
                </Link>


            </div>
            <div className="min-w-[280px] max-w-[400px] mx-auto p-6 sombra flex flex-col gap-6 rounded-lg">
                <img src={imgFerramentas} alt="" />
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                </p>

                <Link to="/cursos/ferramentasageis" className="mx-auto">
                        <Botao prop="Iniciar" />
                </Link>
            </div>
            <div className="min-w-[280px] max-w-[400px] mx-auto p-6 sombra flex flex-col gap-6 rounded-lg">
                <img src={imgRedes} alt="" />
                <p className="text-center">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam in voluptatum dignissimos.
                </p>

                <Link to="/cursos/redes" className="mx-auto">
                        <Botao prop="Iniciar" />
                </Link>
            </div>
        </div>


    </div>
)