const Login = () => {
    return (
        <div className="login bg-stone-300 flex justify-center border-2 rounded-lg ">
            <form action="" className="bg-stone-100 p-8  ">
                <h2 className="my-3">
                    Insira com seu Login e Senha para entrar
                </h2>

                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Email
                    <input
                        type="text"
                        id="insert-email"
                        name="email"
                        className="  my-4 block w-350 p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </label>
                <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Password
                    <input
                        type="password"
                        id="insert-password"
                        name="password"
                        className="  my-4 block w-350 p-2 text-gray-900 border border-gray-400 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </label>
            </form>
        </div>
    );
};
export default Login;
