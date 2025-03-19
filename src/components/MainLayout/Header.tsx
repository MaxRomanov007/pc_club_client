import {FC} from 'react';
import cl from "styles/layouts/main-layout/header.module.scss";
import Burger from "components/MainLayout/Burger.tsx";
import NavBar from "components/MainLayout/NavBar.tsx";

interface HeaderProps {
    isMobile: boolean;
}

const Header: FC<HeaderProps> = ({isMobile}) => {

    return (
        <header className={isMobile ? cl.header : `${cl.header} ${cl.header_tablet}`}>
            {isMobile ?
                <NavBar/>
                :
                <Burger/>
            }
        </header>
    );
};

export default Header;