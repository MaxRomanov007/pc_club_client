import {IPcRoom} from "types/pc/pc-room.ts";
import {FC, useEffect, useRef} from "react";
import cl from "styles/components/RoomsList.module.scss";
import RoomKeyboard from "components/PCTypeDetailsPage/RoomKeyboard.tsx";

interface RoomsCarouselProps {
    rooms: IPcRoom[]
    current?: number
    selectedId?: number
    onPcSelected?: (id?: number) => void;
}

const RoomsCarousel:FC<RoomsCarouselProps> = ({rooms, current, selectedId, onPcSelected}) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (current !== undefined) {
            carouselRef.current?.scroll({left: 300 * current, behavior: "smooth"})
        }
    }, [current]);

    return (
        <div className={cl.RoomsCarousel} ref={carouselRef}>
            {[...Array(rooms.length)].map((_, i) =>
                <div
                    className={cl.RoomsList__room}
                    key={i}
                >
                    <h4 className={cl.Room__title}>Комната {rooms[i].name}</h4>
                    <div className={cl.Room__keyboard}>
                        <RoomKeyboard
                            room={rooms[i]}
                            key={rooms[i].id}
                            onPcSelected={onPcSelected}
                            selectedId={selectedId}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomsCarousel;