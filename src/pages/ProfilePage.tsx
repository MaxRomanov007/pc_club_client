import cl from "styles/pages/ProfilePage.module.scss"
import PageTitle from "components/ui/PageTitle.tsx";
import Button from "components/ui/Button.tsx";
import {FC, useContext, useEffect, useState} from "react";
import {useFetching} from "@/hooks/useFetching.ts";
import {IDishOrder, IPcOrder} from "types/pc/order.ts";
import UserService from "@/api/services/UserService.ts";
import OrdersList from "components/ProfilePage/OrdersList.tsx";
import {UserContext} from "@/context/UserContext.ts";

const ProfilePage: FC = () => {
    const [pcOrders, setPcOrders] = useState<IPcOrder[]>([])
    const [dishOrders, setDishOrders] = useState<IDishOrder[]>([])
    const [fetchUserOrders, isUserOrdersLoading] = useFetching(
        async () => {
            const [pcOrd, dishOrd] = await UserService.getUserOrders()
            setPcOrders(pcOrd)
            setDishOrders(dishOrd)
        }
    )
    const [user] = useContext(UserContext)

    useEffect(() => {
        fetchUserOrders()
    }, []);

    return (
        <>
            <PageTitle title={`Профиль ${user?.email}`}/>
            <div className={cl.ProfilePage}>
                <div className={cl.ProfilePage__container}>
                    <h1 className={cl.ProfilePage__title}>Профиль</h1>
                    <div>Почта: {user?.email}</div>
                    <Button>Пополнить баланс</Button>
                    <Button>Выход</Button>
                    <OrdersList pcOrders={pcOrders} dishOrders={dishOrders} loading={isUserOrdersLoading}/>
                </div>
            </div>
        </>
    );
};

export default ProfilePage;