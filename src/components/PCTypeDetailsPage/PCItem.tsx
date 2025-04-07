import {FC, MouseEventHandler} from 'react';
import {IPc} from "types/pc/pc.ts";
import cl from "styles/components/RoomsList.module.scss";
import classNames from "classnames";
import {Tooltip} from "antd";

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
        <Tooltip title={pc.description}>
            <div
                onClick={clickHandler}
                className={classNames(cl.PcItem, !isSelected && cl.PcItem_available, isSelected && cl.PcItem_checked)}
            />
        </Tooltip>
    );
};

export default PcItem;