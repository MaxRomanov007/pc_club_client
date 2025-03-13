import {FC} from 'react';
import cl from "styles/layouts/main-layout/header.module.scss";
import Burger from "components/layots/MainLayout/Burger.tsx";
import NavBar from "components/layots/MainLayout/NavBar.tsx";

interface HeaderProps {
    isTablet: boolean;
}

const Header: FC<HeaderProps> = ({isTablet}) => {

    return (
        <header className={isTablet ? cl.header : `${cl.header} ${cl.header_tablet}`}>
            {isTablet ?
                <NavBar/>
                :
                <Burger/>
            }
        </header>
    );
};

export default Header;