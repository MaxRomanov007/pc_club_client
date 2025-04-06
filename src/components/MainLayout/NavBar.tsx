import cl from "styles/layouts/main-layout/nav.module.scss";
import NavigationLink from "components/MainLayout/NavigationLink.tsx";
import {FC, useContext} from "react";
import classNames from "classnames";
import {UserContext} from "@/context/UserContext.ts";

interface NavBarProps {
    className?: string;
    onLinkClick?: () => void;
}

const NavBar: FC<NavBarProps> = ({className, onLinkClick}) => {
    const [user, isUserLoading] = useContext(UserContext)

    return (
        <nav className={classNames(cl.nav, className)}>
            <NavigationLink onClick={onLinkClick} to='/restraunt'>Ресторан</NavigationLink>
            <NavigationLink onClick={onLinkClick} to='/pc'>ПК</NavigationLink>
            {user ?
                <NavigationLink
                    onClick={onLinkClick}
                    to='/profile'
                    className={classNames(isUserLoading && cl.nav__link_loading)}
                >
                    {`Аккаунт${user ? ` (${user.balance} руб.)` : ''}`}
                </NavigationLink>
                :
                <NavigationLink onClick={onLinkClick} to='/login'>Войти</NavigationLink>
            }
        </nav>
    );
};

export default NavBar;