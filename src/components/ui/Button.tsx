import cl from "styles/ui/Button.module.scss";
import classNames from "classnames";
import {ComponentPropsWithoutRef, FC} from "react";

const Button: FC<ComponentPropsWithoutRef<'button'>> = (
    {
        className,
        children,
        ...props
    }
) => {
    return (
        <button
            className={classNames(cl.Button, className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;