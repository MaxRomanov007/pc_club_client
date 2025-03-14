import cl from "styles/layouts/main-layout/nav.module.scss";
import NavigationLink from "components/layots/MainLayout/NavigationLink.tsx";
import {FC} from "react";
import classNames from "classnames";

interface NavBarProps {
    className?: string;
}

const NavBar: FC<NavBarProps> = ({className}) => {
    return (
        <nav className={classNames(cl.nav, className)}>
            <NavigationLink to='/restraunt'>Ресторан</NavigationLink>
            <NavigationLink to='/pc'>ПК</NavigationLink>
            <NavigationLink to='/accaunt'>Аккаунт</NavigationLink>
        </nav>
    );
};

export default NavBar;