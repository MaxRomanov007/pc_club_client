import {NavLink, NavLinkRenderProps} from "react-router-dom";
import cl from "styles/layouts/main-layout/nav.module.scss"
import {FC, PropsWithChildren} from "react";

interface NavigationLinkProps extends PropsWithChildren{
    to: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({to, children}) => {
    const linkStyle = ({isActive}: NavLinkRenderProps): string => isActive ? `${cl.nav__link} ${cl.nav__link_selected}` :  cl.nav__link

    return (
        <NavLink to={to} className={linkStyle}>{children}</NavLink>
    );
};

export default NavigationLink;