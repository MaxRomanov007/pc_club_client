import {FC} from "react";
import {IPcOrder} from "types/pc/order.ts";
import cl from "styles/components/ProfilePage/OrderItem.module.scss"

interface PcOrderItemProps {
    order: IPcOrder
}

const PcOrderItem: FC<PcOrderItemProps> = ({order}) => {
    return (
        <div className={cl.OrderItem}>
            <span className={cl.OrderItem__title}>ПК</span>
            <table>
                <caption>
                    {new Date(order.order_date).toLocaleString().split(",")[0]}
                </caption>
                <tbody>
                <tr>
                    <th scope='row'>Имя:</th>
                    <td>{order.pc.pc_type.name}</td>
                </tr>
                <tr>
                    <th scope='row'>Код:</th>
                    <td>{order.code}</td>
                </tr>
                <tr>
                    <th scope='row'>Взят на:</th>
                    <td>{order.duration}ч.</td>
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

export default PcOrderItem;