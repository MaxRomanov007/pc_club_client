import cl from "styles/layouts/main-layout/nav.module.scss";
import NavigationLink from "components/MainLayout/NavigationLink.tsx";
import {FC, useContext} from "react";
import classNames from "classnames";
import {IsAuthorizedContext} from "@/context/isAuthorized.ts";

interface NavBarProps {
    className?: string;
    onLinkClick?: () => void;
}

const NavBar: FC<NavBarProps> = ({className, onLinkClick}) => {
    const [isAuth] = useContext(IsAuthorizedContext)

    return (
        <nav className={classNames(cl.nav, className)}>
            <NavigationLink onClick={onLinkClick} to='/restraunt'>Ресторан</NavigationLink>
            <NavigationLink onClick={onLinkClick} to='/pc'>ПК</NavigationLink>
            {isAuth ?
                <NavigationLink onClick={onLinkClick} to='/profile'>Аккаунт</NavigationLink>
                :
                <NavigationLink onClick={onLinkClick} to='/login'>Войти</NavigationLink>
            }
        </nav>
    );
};

export default NavBar;