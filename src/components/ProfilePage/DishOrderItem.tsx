import {FC} from "react";
import {IDishOrder} from "types/pc/order.ts";
import cl from "styles/components/ProfilePage/OrderItem.module.scss"

interface DishOrderItemProps {
    order: IDishOrder
}

const DishOrderItem: FC<DishOrderItemProps> = ({order}) => {
    return (
        <div className={cl.OrderItem}>
            <span className={cl.OrderItem__title}>Блюдо</span>
            <table>
                <caption>
                    {new Date(order.order_date).toLocaleString().split(",")[0]}
                </caption>
                <tbody>
                <tr>
                    <th scope='row'>Имя:</th>
                    <td>{order.dish_order_list[0].dish.name}</td>
                </tr>
                <tr>
                    <th scope='row'>Кол-во:</th>
                    <td>{order.dish_order_list[0].count}</td>
                </tr>
                <tr>
                    <th scope='row'>Итог:</th>
                    <td>{order.cost}руб.</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DishOrderItem;