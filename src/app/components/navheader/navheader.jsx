import Link from 'next/link'

Link
const NavHeader = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">Sobre</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
      <li>
        <Link href="/register">Cadastro</Link>
      </li>
      <li>
        <Link href="/dashboard">Painel do usuário</Link>
      </li>
    </ul>
  )
}

export default NavHeader
