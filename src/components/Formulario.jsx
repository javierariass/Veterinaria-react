function Formulario() {
    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>

            <p className="text-lg mt-5 text-center">
                Agrega Pacientes y{' '}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-10">
                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre de la Mascota {' '}
                    </label>
                    <input id="mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"placeholder="Nombre de la Mascota" type="text"/>
                </div>

                <div className="mt-3">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Del Propietario {' '}</label>

                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" placeholder="Nombre del Propietario" id="propietario" type="text" />
                </div>

                <div className="mt-3">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email Del Propietario {' '}</label>

                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" placeholder="Email del Propietario" id="email" type="text" />
                </div>

                <div className="mt-3">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta de la Mascota {' '}</label>

                    <input className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md" id="alta" type="date" />
                </div>

                <div className="mt-3">
                    <label 
                    htmlFor="alta"
                     className="block text-gray-700 uppercase font-bold">
                        Alta de la Mascota {' '}
                    </label>

                    <textarea 
                    id="sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los Sintomas"
                    />
                    
                </div>

                <input
                type="submit"
                className="bg-red-500 w-full p-3 text-white font-bold
                hover:bg-indigo-700 cursor-pointer transition-all"
                value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario;