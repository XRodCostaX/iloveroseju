import { Inter } from 'next/font/google';
import './globals.css';
import Footer from './templates/footer/footer';
import Header from './templates/header/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'ILOVEROSEJU',
    description: 'Página para pesquisa no Diário do município de São Paulo ',
};

export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR">
            <body className={inter.className} suppressHydrationWarning={true}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
