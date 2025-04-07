import {FC, useEffect, useMemo, useState} from "react";
import {IDishOrder, IOrder, IPcOrder, isDishOrder, isPcOrder} from "types/pc/order.ts";
import Loader from "components/ui/Loader.tsx";
import PcOrderItem from "components/ProfilePage/PcOrderItem.tsx";
import DishOrderItem from "components/ProfilePage/DishOrderItem.tsx";
import cl from "styles/components/ProfilePage/OrderList.module.scss"
import {useFetching} from "@/hooks/useFetching.ts";
import UserService from "@/api/services/UserService.ts";

const OrdersList: FC = () => {
    const [pcOrders, setPcOrders] = useState<IPcOrder[]>([])
    const [dishOrders, setDishOrders] = useState<IDishOrder[]>([])
    const [fetchUserOrders, isUserOrdersLoading] = useFetching(
        async () => {
            const [pcOrd, dishOrd] = await UserService.getUserOrders()
            setPcOrders(pcOrd)
            setDishOrders(dishOrd)
        }
    )

    useEffect(() => {
        fetchUserOrders()
    }, []);

    const orders = useMemo(
        () =>
            ([...pcOrders, ...dishOrders] as IOrder[]).sort(
                    (a, b) =>
                        new Date(b.order_date).getTime() - new Date(a.order_date).getTime()
            ),
        [pcOrders, dishOrders]
    )


    if (isUserOrdersLoading) {
        return <Loader/>
    }

    return (
        <div className={cl.OrderList}>
            {orders.map(o => {
                if (isPcOrder(o)) {
                    return (
                        <PcOrderItem key={'pc' + o.pc_order_id} order={o}/>
                    )
                }
                if (isDishOrder(o)) {
                    return (
                        <DishOrderItem key={'dish' + o.dish_order_id} order={o}/>
                    )
                }
            })}
        </div>
    );
};

export default OrdersList;