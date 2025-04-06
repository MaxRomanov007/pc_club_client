import PageTitle from "components/ui/PageTitle.tsx";
import {useParams} from "react-router-dom";
import {MouseEventHandler, useContext, useEffect, useMemo, useState} from "react";
import {useFetching} from "@/hooks/useFetching.ts";
import {useNotification} from "@/hooks/useNotification.ts";
import Loader from "components/ui/Loader.tsx";
import {IDish} from "types/pc/dish.ts";
import DishService from "@/api/services/DishService.ts";
import cl from "styles/pages/DishDetailsPage.module.scss";
import ImagesCarousel from "components/ui/ImagesCarousel.tsx";
import Button from "components/ui/Button.tsx";
import {UserContext} from "@/context/UserContext.ts";

type DishDetailsPageParams = {
    id: string
}

const DishDetailsPage = () => {
    const params = useParams<DishDetailsPageParams>();
    const [dish, setDish] = useState<IDish | null>(null)
    const [fetchDish, isDishLoading, DishResponseStatus] = useFetching(
        async (id: number) => {
            const dish1 = await DishService.getDish(id)
            setDish(dish1)
        }
    )
    const showNotification = useNotification()
    const images = useMemo(() => {
        return dish?.dish_images?.map(i => i.path)
    }, [dish])
    const [orderDish, isOrderProcessing] = useFetching(
        async (id: number) => {
            await DishService.orderDish(id)
        }
    )
    const [,,fetchUser] = useContext(UserContext)

    useEffect(() => {
        fetchDish(params.id)
    }, [params]);

    useEffect(() => {
        if (DishResponseStatus === 200) {
            return
        }
        switch (DishResponseStatus) {
            case 500:
                showNotification("Ошибка сервера")
                break
            case 404:
                showNotification("Блюдо не найдено")
                break
            default:
                showNotification("Неизвестная ошибка")
        }
    }, [DishResponseStatus])

    const handleOrderButtonClick: MouseEventHandler<HTMLButtonElement> = async e => {
        e.preventDefault()

        const code = await orderDish(dish?.dish_id)
        switch (code) {
            case 200:
                showNotification("Покупка прошла успешно")
                fetchUser()
                return
            case 402:
                showNotification("Недостаточно средств")
                return
            default:
                showNotification("Произошла ошибка")
        }
    }

    if (isDishLoading) {
        return <Loader/>
    }

    return (
        <>
            <PageTitle title={`Блюдо ${dish?.name ?? ""}`}/>
            <h1 className={cl.Page__title}>{dish?.name}</h1>
            <section className={cl.Information}>
                <ImagesCarousel images={images} className={cl.Information__carousel}/>
                <div className={cl.Information__text}>
                    <p>{dish?.description}</p>
                    <p>{dish?.calories} ккал.</p>
                    <h3 className={cl.Information__cost}>{dish?.cost} руб.</h3>
                    <Button disabled={isOrderProcessing} onClick={handleOrderButtonClick}>Заказать</Button>
                </div>
            </section>
        </>
    );
};

export default DishDetailsPage;