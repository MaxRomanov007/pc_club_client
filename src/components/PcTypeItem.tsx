import {FC, MouseEventHandler} from 'react';
import {IPcType} from "types/pc/pc-type.ts";
import cl from "styles/components/PcTypeItem.module.scss"
import {useNavigate} from "react-router-dom";
import {Image} from "antd";
import {emptyImage} from "@/constants";

interface PcTypeItemProps {
    pcType: IPcType
}

const PcTypeItem: FC<PcTypeItemProps> = ({pcType}) => {
    const navigate = useNavigate()

    const imageSource = pcType.pc_type_images?.find(i => i.is_main)?.path

    const openItem: MouseEventHandler<HTMLDivElement> = event => {
        event.preventDefault()
        navigate(`${pcType.pc_type_id}`)
    }

    return (
        <div onClick={openItem} className={cl.PcTypeItem}>
            <div className={cl.PcTypeItem__container}>
                <Image
                    src={imageSource}
                    alt={pcType.name}
                    className={cl.PcTypeItem__image}
                    fallback={emptyImage}
                    width='100%'
                    preview={false}
                />
                <h3 className={cl.PcTypeItem__title}>{pcType.name}</h3>
                <p>{pcType.hour_cost} руб./час</p>
            </div>
        </div>
    );
};

export default PcTypeItem;