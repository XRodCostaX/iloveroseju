export const Search = async () => {
    return (
        <div className="results-container m-8 flex justify-evenly flex-col bg-stone-200 border-2 rounded-lg p-10 ">
            <form className="form-result flex flex-col">
                <h2>PESQUISA</h2>
                <div className="results">
                    <h2>Aqui mostrará os resultados</h2>
                </div>
                <div className="input-container">
                    <label htmlFor="date">
                        <span>Data</span>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            className="form-date my-4 block w-full p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                    <label htmlFor="singlesearch">
                        <span>Pesquisar por nome</span>
                        <input
                            type="text"
                            id="singlesearch"
                            className="form-singlesearch my-4 block w-full p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                    </label>
                    <label htmlFor="select">
                        <span>Nome do Servidor</span>
                        <select
                            name="select"
                            id="select"
                            className="my-4 block w-full p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">Selecionar</option>
                        </select>
                    </label>
                </div>

                <div className="button-container my-4">
                    <button
                        type="button"
                        class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Pesquisar
                    </button>
                    <button
                        type="button"
                        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Limpar
                    </button>
                </div>
            </form>
        </div>
    );
};
