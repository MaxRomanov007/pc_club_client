import {useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {IPcType} from "types/pc/pc-type.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import PcService from "@/service/PcService.ts";
import {useNotification} from "@/hooks/useNotification.ts";
import Loader from "components/ui/Loader.tsx";
import ImagesCarousel from "components/ui/ImagesCarousel.tsx";
import cl from "styles/pages/PCTypeDetailsPage.module.scss"
import classNames from "classnames";

type PcTypeDetailsPageParams = {
    id: string
}

const PcTypeDetailsPage = () => {
    const params = useParams<PcTypeDetailsPageParams>();
    const [pcType, setPcType] = useState<IPcType | null>(null)
    const [fetching, isLoading, responseStatus] = useFetching(
        async (id: number) => {
            const pcType = await PcService.getPCType(id)
            setPcType(pcType)
        }
    )
    const showNotification = useNotification()

    const images = useMemo(() => {
        return pcType?.pc_type_images?.map(i => i.path)
    }, [pcType])

    useEffect(() => {
        fetching(params.id)
    }, [params]);

    useEffect(() => {
        if (responseStatus === 200) {
            return
        }
        switch (responseStatus) {
            case 500:
                showNotification("Ошибка сервера")
                break
            case 404:
                showNotification("ПК не найден")
                break
            default:
                showNotification("Неизвестная ошибка")
        }
    }, [responseStatus])

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div>
            <h1>{pcType?.name}</h1>
            <section className={classNames(cl.Page__information, cl.Information)}>
                <ImagesCarousel images={images} className={cl.Information__carousel}/>
                <div>
                    <p>{pcType?.description}</p>
                    <h3>{pcType?.hour_cost}</h3>
                    <button>Okay</button>
                </div>
            </section>
        </div>
    );
};

export default PcTypeDetailsPage;