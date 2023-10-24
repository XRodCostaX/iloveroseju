export const FeedDataBase = () => {
  return (
    <div className="active ">
      <h2>Inserir ou Remover servidores para pesquisa no DOM</h2>
      <form>
        <label htmlFor="Nome">
          Nome
          <input type="text" placeholder="Insira o nome do servidor" />
        </label>

        <label htmlFor="RF">
          Registro funcional
          <input type="text" placeholder="RF - apenas os números" />
        </label>
        <button>Inserir</button>
        <button>Remover</button>
        <button>Limpar</button>
      </form>
    </div>
  )
}
