'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = ({ navLink }) => {
    const navLinks = [
        {
            name: 'Pagina Inicial',
            href: '/',
        },
        {
            name: 'Sobre',
            href: '/about',
        },
        {
            name: 'Login',
            href: '/login',
        },
        {
            name: 'Cadastro',
            href: '/register',
        },

        {
            name: 'Painel do usuário',
            href: '/dashboard',
        },
    ];
    const pathname = usePathname();
    return (
        <nav>
            <div className="links-container ">
                <ul className="">
                    {navLinks.map((link) => {
                        const isActive = pathname.endsWith(link.href);
                        return (
                            <li
                                key={link.name}
                                className={isActive ? 'bg-orange-600' : ''}
                            >
                                <Link href={link.href}>
                                    {link.name} -{' '}
                                    {/* {isActive ? `Vc está em ${link.name}` : ''} */}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default NavLinks;
