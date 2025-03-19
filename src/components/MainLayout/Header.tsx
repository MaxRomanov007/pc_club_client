import {FC} from 'react';
import cl from "styles/layouts/main-layout/header.module.scss";
import Burger from "components/MainLayout/Burger.tsx";
import NavBar from "components/MainLayout/NavBar.tsx";
import {Link} from "react-router-dom";
import classNames from "classnames";

interface HeaderProps {
    isMobile: boolean;
}

const Header: FC<HeaderProps> = ({isMobile}) => {
    return (
        <header className={classNames(cl.header, isMobile && cl.header_mobile)}>
            {isMobile ?
                <></>
                :
                <div className={cl.header__navbarContainer}>
                    <NavBar/>
                </div>
            }

            <Link
                to='/pc'
                className={cl.header__logo}
            >
            PC Club
            </Link>

            {!isMobile ?
                <></>
                :
                <Burger/>
            }
        </header>
    );
};

export default Header;