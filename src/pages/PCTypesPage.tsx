import {FC, useEffect, useState} from "react";
import {IPcType} from "types/pc/pc-type.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import PcService from "@/service/PcService.ts";
import List from "components/ui/List.tsx";
import PcTypeItem from "components/PcTypeItem.tsx";
import cl from "styles/pages/PCsPage.module.scss"
import {useNotification} from "@/hooks/useNotification.ts";
import PageTitle from "components/ui/PageTitle.tsx";

const PCTypesPage: FC = () => {
    const [pcTypes, setPCTypes] = useState<IPcType[]>([]);
    const [limit] = useState<number>(10);
    const [offset] = useState<number>(5);
    const showNotification = useNotification();
    const [fetchPcTypes, isPcTypesLoading, pcTypesStatus] = useFetching(
        async (limit: number, offset: number) => {
            const pcTypes = await PcService.getPCTypes(limit, offset);
            setPCTypes(pcTypes);
        }
    )

    useEffect(() => {
        fetchPcTypes(limit, offset);
    }, [limit, offset]);

    useEffect(() => {
        if (pcTypesStatus === 200) {
            return
        }
        switch (pcTypesStatus) {
            case 500:
                showNotification("Ошибка сервера")
                break
            case 404:
                showNotification("ПК не найдены")
                break
            default:
                showNotification("Неизвестная ошибка")
        }
    }, [pcTypesStatus])

    return (
        <>
            <PageTitle title={'Our PC'}/>
            <h1 className={cl.PCsPage__title}>Наши ПК</h1>
            <List
                className={cl.PCsPage__list}
                collection={pcTypes}
                elementFunc={type => <PcTypeItem pcType={type} key={type.pc_type_id}/>}
                isLoading={isPcTypesLoading}
            />
        </>
    );
};

export default PCTypesPage;