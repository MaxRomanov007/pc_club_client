import PageTitle from "components/ui/PageTitle.tsx";
import cl from "styles/pages/DishesPage.module.scss";
import List from "components/ui/List.tsx";
import {useEffect, useState} from "react";
import {useNotification} from "@/hooks/useNotification.ts";
import {useFetching} from "@/hooks/useFetching.ts";
import {IDish} from "types/pc/dish.ts";
import DishService from "@/api/services/DishService.ts";
import DishItem from "components/DishItem.tsx";

const DishesPage = () => {
    const [dishes, setDishes] = useState<IDish[]>([]);
    const [limit] = useState<number>(10);
    const [offset] = useState<number>(0);
    const showNotification = useNotification();
    const [fetchDishes, isDishesLoading, dishesStatus] = useFetching(
        async (limit: number, offset: number) => {
            const dishes1 = await DishService.getDishes(limit, offset);
            setDishes(dishes1);
        }
    )

    useEffect(() => {
        fetchDishes(limit, offset);
    }, [limit, offset]);

    useEffect(() => {
        if (dishesStatus === 200) {
            return
        }
        switch (dishesStatus) {
            case 500:
                showNotification("Ошибка сервера")
                break
            case 404:
                showNotification("Блюда не найдены")
                break
            default:
                showNotification("Неизвестная ошибка")
        }
    }, [dishesStatus])

    return (
        <>
            <PageTitle title='Ресторан'/>
            <div>
                <h1 className={cl.DishesPage__title}>Наш ресторан</h1>
                <List
                    collection={dishes}
                    elementFunc={type => <DishItem dish={type} key={type.dish_id}/>}
                    isLoading={isDishesLoading}
                />
            </div>
        </>
    );
};

export default DishesPage;