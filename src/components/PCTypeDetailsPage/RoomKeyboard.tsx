import {FC} from 'react';
import {IPcRoom} from "types/pc/pc-room.ts";
import PcItem from "components/PCTypeDetailsPage/PCItem.tsx";
import cl from "styles/components/RoomsList.module.scss"

interface RoomKeyboardProps {
    room: IPcRoom
    selectedId?: number
    onPcSelected?: (id?: number) => void;
}

const RoomKeyboard: FC<RoomKeyboardProps> = ({room, selectedId, onPcSelected}) => {
    const onSelectionChanged = (pcId?: number) => (isSelected: boolean) => {
        if (!isSelected) {
            onPcSelected?.(0)
            return
        }

        onPcSelected?.(pcId)
    }

    return (
        <table className={cl.RoomKeyboard}>
            <thead>
            <tr>
                {[...Array(room.places + 1)].map((_, i) =>
                    <th scope='col' key={i}>
                        {i}
                    </th>
                )}
            </tr>
            </thead>
            <tbody>
            {[...Array(room.rows)].map((_, i) =>
                <tr key={i + 1}>
                    <th scope='row'>
                        <p>{i + 1}</p>
                    </th>
                    {[...Array(room.places)].map((_, j) => {
                            const pc = room.pcs.find(pc => pc.row === i + 1 && pc.place === j + 1)
                            return (
                                <td key={`${i + 1} ${j + 1}`}>
                                    <PcItem
                                        pc={pc}
                                        isSelected={pc?.pc_id === selectedId}
                                        onSelectionChanged={onSelectionChanged(pc?.pc_id)}
                                    />
                                </td>
                            )
                        }
                    )}
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default RoomKeyboard;