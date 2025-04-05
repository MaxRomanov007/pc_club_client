import cl from "styles/layouts/main-layout/nav.module.scss";
import NavigationLink from "components/MainLayout/NavigationLink.tsx";
import {FC, useContext} from "react";
import classNames from "classnames";
import {IsAuthorizedContext} from "@/context/isAuthorized.ts";

interface NavBarProps {
    className?: string;
}

const NavBar: FC<NavBarProps> = ({className}) => {
    const [isAuth] = useContext(IsAuthorizedContext)

    return (
        <nav className={classNames(cl.nav, className)}>
            <NavigationLink to='/restraunt'>Ресторан</NavigationLink>
            <NavigationLink to='/pc'>ПК</NavigationLink>
            {isAuth ?
                <NavigationLink to='/profile'>Аккаунт</NavigationLink>
                :
                <NavigationLink to='/login'>Войти</NavigationLink>
            }
        </nav>
    );
};

export default NavBar;