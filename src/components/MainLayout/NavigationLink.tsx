import {NavLink, NavLinkRenderProps} from "react-router-dom";
import cl from "styles/layouts/main-layout/nav.module.scss"
import {FC, PropsWithChildren} from "react";
import classNames from "classnames";

interface NavigationLinkProps extends PropsWithChildren{
    to: string;
    onClick?: () => void;
    className?: string;
}

const NavigationLink: FC<NavigationLinkProps> = (
    {
        to,
        children,
        onClick,
        className,
    }) => {
    const linkStyle = ({isActive}: NavLinkRenderProps): string => classNames(cl.nav__link, isActive && cl.nav__link_selected, className)

    return (
        <NavLink
            to={to}
            onClick={onClick}
            className={linkStyle}
        >
            {children}
        </NavLink>
    );
};

export default NavigationLink;