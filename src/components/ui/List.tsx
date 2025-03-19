import {ComponentPropsWithoutRef, ReactNode} from "react";
import cl from "styles/ui/List.module.scss"
import Loader from "components/ui/Loader.tsx";
import classNames from "classnames";

type ElementPlaceFunc<T> = (param: T) => ReactNode;

interface ListProps<T> extends ComponentPropsWithoutRef<'div'> {
    collection: T[]
    elementFunc: ElementPlaceFunc<T>
    isLoading?: boolean
    zeroValue?: string
}

function List<T>(
    {
        collection,
        elementFunc,
        isLoading = false,
        zeroValue = "Not found",
        className,
    }: ListProps<T>) {

    if (isLoading) {
        return <Loader/>
    }

    if (collection.length === 0) {
        return (
            <h2 className={cl.List__notFound}>{zeroValue}</h2>
        )
    }

    return (
        <div className={classNames(cl.List, className)}>
            {collection.map((item: T) =>
                elementFunc(item)
            )}
        </div>
    );
}

export default List;