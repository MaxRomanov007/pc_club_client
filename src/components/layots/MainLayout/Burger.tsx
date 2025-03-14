import cl from "styles/layouts/main-layout/burger.module.scss";
import {MouseEventHandler, useState} from "react";
import classNames from "classnames";
import NavBar from "components/layots/MainLayout/NavBar.tsx";

const Burger = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const clickHandler: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault();

        setIsVisible(!isVisible);
    }

    return (
        <>
            <button className={classNames(cl.burger__button, isVisible && cl.burger__button_open)} onClick={clickHandler}/>
            <aside className={classNames(cl.burger__menu, isVisible && cl.burger__menu_visible)}>
                <NavBar className={cl.burger__menu__links}/>
            </aside>
        </>
    );
};

export default Burger;