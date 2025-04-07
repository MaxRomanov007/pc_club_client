import {FC, MouseEventHandler, useContext, useEffect, useState} from 'react';
import cl from "styles/pages/PCTypeDetailsPage.module.scss";
import RoomsList from "components/PCTypeDetailsPage/RoomsList.tsx";
import NumberInput from "components/ui/NumberInput.tsx";
import Button from "components/ui/Button.tsx";
import {ButtonVariants} from "types/enums/ButtonVariants.ts";
import PopupButton from "components/ui/PopupButton.tsx";
import {IPcRoom} from "types/pc/pc-room.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import PcService from "@/api/services/PcService.ts";
import {useNotification} from "@/hooks/useNotification.ts";
import {UserContext} from "@/context/UserContext.ts";

interface OrderPcButtonProps {
    id: number
    hourCost?: number
}

const OrderPcButton: FC<OrderPcButtonProps> = ({id, hourCost = 0}) => {
    const [rooms, setRooms] = useState<IPcRoom[]>([]);
    const [selectedPcId, setSelectedPcId] = useState<number>(0);
    const [hourCount, setHourCount] = useState<number>(1)
    const showNotification = useNotification()
    const [fetchPcRooms, , roomResponseStatus] = useFetching(
        async (id: number) => {
            const pcs = await PcService.getPcs(id)
            const roomsMap = new Map<number, IPcRoom>();

            pcs.forEach(pc => {
                if (!roomsMap.has(pc.pc_room_id)) {
                    roomsMap.set(pc.pc_room_id, {
                        ...pc.pc_room,
                        pcs: []
                    });
                }
                const room = roomsMap.get(pc.pc_room_id)!;
                room.pcs.push(pc);
            });

            setRooms(Array.from(roomsMap.values()))
        }
    )
    const [orderPc, , orderPcStatus] = useFetching(
        async (pcId: number, hoursCount: number) => {
            await PcService.orderPc(pcId, hoursCount)
        }
    )
    const [,,fetchUser] = useContext(UserContext)

    useEffect(() => {
        fetchPcRooms(id)
    }, [id]);


    useEffect(() => {
        if (roomResponseStatus === 200) {
            return
        }
        switch (roomResponseStatus) {
            case 500:
                showNotification("Ошибка сервера")
                break
            case 404:
                showNotification("Комнаты ПК не найден")
                break
            default:
                showNotification("Неизвестная ошибка")
        }
    }, [roomResponseStatus])
    useEffect(() => {
        if (orderPcStatus === 200) {
            return
        }
        if (orderPcStatus === 500) {
            showNotification("Не удалось арендовать ПК")
        }
    }, [orderPcStatus]);


    const onPcSelectionChanged = (id: number = 0) => {
        setSelectedPcId(id)
    }

    const onOrderButtonClick: MouseEventHandler<HTMLButtonElement> = async () => {
        if (selectedPcId === 0) {
            showNotification("Необходимо выбрать ПК")
            return
        }
        const status = await orderPc(selectedPcId, hourCount)
        switch (status) {
            case 200:
                showNotification("ПК успешно арендован")
                fetchUser()
                return
            case 401:
                return
            case 402:
                showNotification("Недостаточно средств")
                return
            default:
                showNotification("Произошла ошибка")
        }
    }

    return (
        <PopupButton text='Арендовать'>
            <div className={cl.Information__order}>
                <RoomsList
                    rooms={rooms}
                    selectedId={selectedPcId}
                    onPcSelected={onPcSelectionChanged}
                />

                <div className={cl.Order__keyboard}>
                    <NumberInput
                        min={1}
                        max={8}
                        value={hourCount}
                        onValueChange={count => setHourCount(count)}
                    />

                    <span>Итог: {hourCount * hourCost} руб.</span>

                    <Button
                        variant={ButtonVariants.Outlined}
                        onClick={onOrderButtonClick}
                    >
                        Арендовать ПК
                    </Button>
                </div>
            </div>
        </PopupButton>
    );
};

export default OrderPcButton;