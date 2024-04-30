import { Botao } from "../components/Botao"

export const Inicio = () => {
    return (
        <div className="flex flex-col md:items-start md:w-2/5 md:mt-24">
            <h1 className="text-5xl italic text-white text-center mt-8 md:mx-auto md:text-7xl"><span className="font-bold  text-sky-600">Bird</span>Tech</h1>

            <p className="my-12 text-center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam debitis voluptas in blanditiis veritatis explicabo, dignissimos nostrum officia, dicta aspernatur perspiciatis maxime provident! Ipsa excepturi exercitationem provident labore ut officiis.
            </p>

            <div className="flex justify-center md:mx-auto">
                <Botao prop="Conecte-se" />
            </div>

        </div>
    )
}