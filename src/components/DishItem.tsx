import cl from "styles/components/Item.module.scss"
import {useNavigate} from "react-router-dom";
import {FC, MouseEventHandler, ReactEventHandler} from "react";
import {emptyImage} from "@/constants";
import {IDish} from "types/pc/dish.ts";

interface PcTypeItemProps {
    dish: IDish
}

const DishItem: FC<PcTypeItemProps> = ({dish}) => {
    const navigate = useNavigate()

    const imageSource = dish.dish_images?.find(i => i.is_main)?.path || 'undefined'

    const openItem: MouseEventHandler<HTMLDivElement> = event => {
        event.preventDefault()
        navigate(`${dish.dish_id}`)
    }
    const imageFailed: ReactEventHandler<HTMLImageElement> = event => {
        event.currentTarget.src = emptyImage
    }

    return (
        <div className={cl.Item} onClick={openItem}>
            <div className={cl.Item__container}>
                <img
                    src={imageSource}
                    alt={dish.name}
                    onError={imageFailed}
                    className={cl.Item__image}
                    width='100%'
                />
                <h3 className={cl.Item__title}>{dish.name}</h3>
                <p>{dish.cost} руб.</p>
            </div>
        </div>
    );
};

export default DishItem;