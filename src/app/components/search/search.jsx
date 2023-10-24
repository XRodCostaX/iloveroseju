export const Search = async () => {
    return (
        <div className="results-container">
            <h2>PESQUISA</h2>
            <div className="results">
                <p>Aqui mostrará os resultados</p>
            </div>
            <form className="form-result">
                <label htmlFor="date">
                    <span>Data</span>
                    <input type="date" name="date" className="form-date" />
                </label>
                <label htmlFor="singlesearch">
                    <input type="text" className="form-singlesearch" />
                </label>
                <label htmlFor="select">
                    <span>Nome do Servidor</span>
                    <select name="select" id="select" className="">
                        <option value="">Selecionar</option>
                    </select>
                </label>
                <button>Pesquisar</button>
                <button>Limpar</button>
            </form>
        </div>
    );
};
