import cl from "styles/layouts/main-layout/nav.module.scss";
import NavigationLink from "components/layots/MainLayout/NavigationLink.tsx";

const NavBar = () => {
    return (
        <nav className={cl.nav}>
            <>
                <NavigationLink to='/restraunt'>Ресторан</NavigationLink>
                <NavigationLink to='/pc'>ПК</NavigationLink>
                <NavigationLink to='/accaunt'>Аккаунт</NavigationLink>
            </>
        </nav>
    );
};

export default NavBar;