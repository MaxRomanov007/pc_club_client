import cl from "styles/pages/ProfilePage.module.scss"
import PageTitle from "components/ui/PageTitle.tsx";
import Button from "components/ui/Button.tsx";
import {FC, MouseEventHandler, useContext} from "react";
import OrdersList from "components/ProfilePage/OrdersList.tsx";
import {UserContext} from "@/context/UserContext.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import UserService from "@/api/services/UserService.ts";
import {useNotification} from "@/hooks/useNotification.ts";
import {useNavigate} from "react-router-dom";
import {accessTokenKey} from "@/constants";

const ProfilePage: FC = () => {
    const [user, , fetchUser] = useContext(UserContext)
    const [logout, isLogoutProcessing] = useFetching(
        async () => await UserService.logout()
    )
    const [addMoney, isMoneyAddProcessing] = useFetching(
        async () => await UserService.addUserMoney(1000)
    )
    const showNotification = useNotification()
    const navigate = useNavigate()

    const onLogoutButtonClick: MouseEventHandler<HTMLButtonElement> = async () => {
        await logout()
        showNotification("Вы успешно вышли из аккаунта")
        navigate("/login")
        localStorage.removeItem(accessTokenKey)
        fetchUser()
    }

    const onAddMoneyButtonClick: MouseEventHandler<HTMLButtonElement> = async () => {
        const status = await addMoney()
        if (status === 200) {
            showNotification("Баланс пополнен")
            fetchUser()
            return
        }
        showNotification("Произошла ошибка")
    }

    return (
        <>
            <PageTitle title={`Профиль ${user?.email}`}/>
            <div className={cl.ProfilePage}>
                <div className={cl.ProfilePage__container}>
                    <h1 className={cl.ProfilePage__title}>
                        Профиль
                    </h1>
                    <div>Почта: {user?.email}</div>
                    <Button
                        onClick={onAddMoneyButtonClick}
                        disabled={isMoneyAddProcessing}
                    >
                        Пополнить баланс
                    </Button>
                    <Button
                        onClick={onLogoutButtonClick}
                        disabled={isLogoutProcessing}
                    >
                        Выход
                    </Button>
                    <OrdersList/>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;