import {useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {IPcType} from "types/pc/pc-type.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import PcService from "@/service/PcService.ts";
import {useNotification} from "@/hooks/useNotification.ts";
import Loader from "components/ui/Loader.tsx";
import ImagesCarousel from "components/ui/ImagesCarousel.tsx";
import cl from "styles/pages/PCTypeDetailsPage.module.scss"
import PopupButton from "components/ui/PopupButton.tsx";
import PageTitle from "components/ui/PageTitle.tsx";
import RoomsList from "components/PCTypeDetailsPage/RoomsList.tsx";
import {IPcRoom} from "types/pc/pc-room.ts";

type PcTypeDetailsPageParams = {
    id: string
}

const PcTypeDetailsPage = () => {
    const params = useParams<PcTypeDetailsPageParams>();
    const [pcType, setPcType] = useState<IPcType | null>(null)
    const [rooms, setRooms] = useState<IPcRoom[]>([]);
    const [selectedPcId, setSelectedPcId] = useState<number>(0);
    const [fetchPCType, isPcTypeLoading, pcTypeResponseStatus] = useFetching(
        async (id: number) => {
            const pcType = await PcService.getPCType(id)
            setPcType(pcType)
        }
    )
    const [fetchPcRooms, , roomResponseStatus] = useFetching(
        async (id: number) => {
            const rooms = await PcService.getPCRooms(id)
            setRooms(rooms)
        }
    )
    const showNotification = useNotification()
    const images = useMemo(() => {
        return pcType?.pc_type_images?.map(i => i.path)
    }, [pcType])

    useEffect(() => {
        fetchPCType(params.id)
        fetchPcRooms(params.id)
    }, [params]);

    useEffect(() => {
        if (pcTypeResponseStatus === 200) {
            return
        }
        switch (pcTypeResponseStatus) {
            case 500:
                showNotification("Ошибка сервера")
                break
            case 404:
                showNotification("ПК не найден")
                break
            default:
                showNotification("Неизвестная ошибка")
        }
    }, [pcTypeResponseStatus])

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

    const onPcSelectionChanged = (id?: number) => {
        setSelectedPcId(id ?? 0)
        console.log(id)
    }

    if (isPcTypeLoading) {
        return <Loader/>
    }

    return (
        <div>
            <PageTitle title={`PC ${pcType?.name || ''}`}/>
            <h1 className={cl.Page__title}>{pcType?.name}</h1>
            <section className={cl.Information}>
                <ImagesCarousel images={images} className={cl.Information__carousel}/>
                <div>
                    <p>{pcType?.description}</p>
                    <h3>{pcType?.hour_cost}</h3>
                    <PopupButton text='Hello'>
                        <RoomsList
                            rooms={rooms}
                            selectedId={selectedPcId}
                            onPcSelected={onPcSelectionChanged }
                        />


                    </PopupButton>
                </div>
            </section>
        </div>
    );
};

export default PcTypeDetailsPage;