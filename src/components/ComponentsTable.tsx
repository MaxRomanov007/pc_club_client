import {FC} from "react";
import {IPcType} from "types/pc/pc-type.ts";
import cl from "styles/components/ComponentsTable.module.scss"

interface ComponentsTableProps {
    pcType?: IPcType
}

const ComponentsTable: FC<ComponentsTableProps> = ({pcType}) => {
    return (
        <div className={cl.ComponentsTable__container}>
            <table className={cl.ComponentsTable}>
                <thead>
                <tr>
                    <th scope='col'>Компонент</th>
                    <th scope='col'>Производитель</th>
                    <th scope='col'>Модель</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope='row'>Процессор</th>
                    <td>{pcType?.processor.processor_producer.name}</td>
                    <td>{pcType?.processor.model}</td>
                </tr>
                <tr>
                    <th scope='row'>Видеокарта</th>
                    <td>{pcType?.video_card.video_card_producer.name}</td>
                    <td>{pcType?.video_card.model}</td>
                </tr>
                <tr>
                    <th scope='row'>Монитор</th>
                    <td>{pcType?.monitor.monitor_producer.name}</td>
                    <td>{pcType?.monitor.model}</td>
                </tr>
                <tr>
                    <th scope='row'>ОЗУ</th>
                    <td>{pcType?.ram.ram_type.name}</td>
                    <td>{pcType?.ram.capacity} гб</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ComponentsTable;