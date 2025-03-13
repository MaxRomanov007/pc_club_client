import cl from "styles/layouts/main-layout/burger.module.scss";
import NavigationLink from "components/layots/MainLayout/NavigationLink.tsx";
import {MouseEventHandler, useState} from "react";

const Burger = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const clickHandler: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault();

        setIsVisible(!isVisible);
    }

    return (
        <>
            <button className={isVisible ? cl.burger__button + " " + cl.burger__button_open : cl.burger__button} onClick={clickHandler}/>
            <aside className={isVisible ? cl.burger__menu + " " + cl.burger__menu_visible : cl.burger__menu}>
                <NavigationLink to='/restraunt'>Ресторан</NavigationLink>
                <NavigationLink to='/pc'>ПК</NavigationLink>
                <NavigationLink to='/accaunt'>Аккаунт</NavigationLink>
            </aside>
        </>
    );
};

export default Burger;