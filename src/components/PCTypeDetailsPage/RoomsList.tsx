import {IPcRoom} from "types/pc/pc-room.ts";
import {FC, MouseEventHandler, useState} from "react";
import cl from "styles/components/RoomsList.module.scss"
import classNames from "classnames";
import RoomsCarousel from "components/PCTypeDetailsPage/RoomsCarousel.tsx";

interface RoomsListProps {
    rooms: IPcRoom[]
    selectedId?: number
    onPcSelected?: (id?: number) => void
}

const RoomsList: FC<RoomsListProps> = ({rooms, onPcSelected, selectedId}) => {
    const [currentRoom, setCurrentRooms] = useState<number>(0)

    const leftClickHandler: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()
        setCurrentRooms(currentRoom - 1)
    }

    const rightClickHandler: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()
        setCurrentRooms(currentRoom + 1)
    }

    if (!rooms.length) {
        return (
            <div>Not found</div>
        )
    }

    return (
        <div className={cl.RoomsList}>

            <button
                disabled={currentRoom === 0}
                className={classNames(cl.RoomsList__arrow, cl.RoomsList__arrow_left)}
                onClick={leftClickHandler}
            />

            <RoomsCarousel
                rooms={rooms}
                current={currentRoom}
                onPcSelected={onPcSelected}
                selectedId={selectedId}
            />

            <button
                disabled={currentRoom === rooms.length - 1}
                className={classNames(cl.RoomsList__arrow, cl.RoomsList__arrow_right)}
                onClick={rightClickHandler}
            />
        </div>
    );
};

export default RoomsList;