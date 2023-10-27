export const FeedDataBase = () => {
    return (
        <div className="active m-8 flex justify-evenly  bg-stone-200 border-2 rounded-lg p-10 ">
            <form>
                <div className="flex items-center justify-around flex-col flex-wrap">
                    <h2 className=" text-lg m-4">
                        Inserir ou Remover servidores para pesquisa no DOM
                    </h2>
                    <div className="input-container">
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Nome do servidor
                            <input
                                type="text"
                                id="insert-name"
                                name="name"
                                className="  my-4 block w-full p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </label>

                        <label
                            htmlFor="rf"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            RF do servidor
                            <input
                                type="text"
                                id="insert-rf"
                                className="block my-4 w-600 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </label>
                    </div>
                    <div className="btn-container my-4">
                        <button
                            type="button"
                            className="text-white justify-self-center bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Inserir
                        </button>
                        <button
                            type="button"
                            className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Limpar
                        </button>
                        <button
                            type="button"
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        >
                            Remover
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
