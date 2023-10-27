import NavLinks from '../../components/navheader/NavLinks';

const Header = () => {
    return (
        <header className="bg-stone-300 h-32 flex justify-end p-4 justify-items-center [&>li]:m-10 ">
            <NavLinks />
        </header>
    );
};

export default Header;
