import {FC, MouseEventHandler} from 'react';
import {IPc} from "types/pc/pc.ts";
import cl from "styles/components/RoomsList.module.scss";
import classNames from "classnames";

interface PcItemProps {
    pc?: IPc
    isSelected?: boolean
    onSelectionChanged?: (selected: boolean) => void;
}

const PcItem: FC<PcItemProps> = (
    {
        pc,
        isSelected,
        onSelectionChanged
    }) => {
    const clickHandler: MouseEventHandler<HTMLDivElement> = () => {
        onSelectionChanged?.(!isSelected)
    }

    if (!pc) {
        return (
            <div className={cl.PcItem}/>
        )
    }

    return (
        <div
            onClick={clickHandler}
            className={classNames(cl.PcItem, !isSelected && cl.PcItem_available, isSelected && cl.PcItem_checked)}
        />
    );
};

export default PcItem;