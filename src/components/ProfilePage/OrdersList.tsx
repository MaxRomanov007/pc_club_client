import {FC, useMemo} from "react";
import {IPcOrder, IDishOrder, IOrder, isPcOrder, isDishOrder} from "types/pc/order.ts";
import Loader from "components/ui/Loader.tsx";
import PcOrderItem from "components/ProfilePage/PcOrderItem.tsx";
import DishOrderItem from "components/ProfilePage/DishOrderItem.tsx";
import cl from "styles/components/ProfilePage/OrderList.module.scss"

interface OrdersListProps {
    pcOrders: IPcOrder[]
    dishOrders: IDishOrder[]
    loading?: boolean
}

const OrdersList: FC<OrdersListProps> = ({pcOrders, dishOrders, loading}) => {
    const orders = useMemo(
        () =>
            ([...pcOrders, ...dishOrders] as IOrder[]).sort(
                    (a, b) =>
                        new Date(b.order_date).getTime() - new Date(a.order_date).getTime()
            ),
        [pcOrders, dishOrders]
    )


    if (loading) {
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