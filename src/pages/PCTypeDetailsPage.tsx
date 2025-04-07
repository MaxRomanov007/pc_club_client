import {useParams} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {IPcType} from "types/pc/pc-type.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import PcService from "@/api/services/PcService.ts";
import {useNotification} from "@/hooks/useNotification.ts";
import Loader from "components/ui/Loader.tsx";
import ImagesCarousel from "components/ui/ImagesCarousel.tsx";
import cl from "styles/pages/PCTypeDetailsPage.module.scss"
import PageTitle from "components/utils/PageTitle.ts";
import OrderPcButton from "components/PCTypeDetailsPage/OrderPcButton.tsx";
import ComponentsTable from "components/ComponentsTable.tsx";

type PcTypeDetailsPageParams = {
    id: string
}

const PcTypeDetailsPage = () => {
    const params = useParams<PcTypeDetailsPageParams>();
    const [pcType, setPcType] = useState<IPcType | undefined>(undefined)
    const [fetchPCType, isPcTypeLoading, pcTypeResponseStatus] = useFetching(
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
        fetchPCType(params.id)
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

    if (isPcTypeLoading) {
        return <Loader/>
    }

    return (
        <div>
            <PageTitle title={`ПК ${pcType?.name ?? ''}`}/>
            <h1 className={cl.Page__title}>{pcType?.name}</h1>
            <section className={cl.Information}>
                <ImagesCarousel images={images} className={cl.Information__carousel}/>
                <div>
                    <p>{pcType?.description}</p>
                    <h3>{pcType?.hour_cost} руб./час</h3>
                    <OrderPcButton id={Number(params.id)} hourCost={pcType?.hour_cost}/>
                </div>
            </section>
            <section>
                <h2 className={cl.Components__title}>Характеристики</h2>
                <ComponentsTable pcType={pcType}/>
            </section>
        </div>
    );
};

export default PcTypeDetailsPage;