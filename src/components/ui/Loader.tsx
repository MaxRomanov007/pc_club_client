import cl from "styles/ui/Loader.module.scss"
import {ComponentPropsWithoutRef, FC} from "react";
import classNames from "classnames";

const Loader: FC<ComponentPropsWithoutRef<'div'>> = ({className, ...props}) => {
    return (
        <div className={classNames(cl.Loader__container, className)} {...props}>
            <div className={cl.Loader}/>
        </div>
    );
};

export default Loader;