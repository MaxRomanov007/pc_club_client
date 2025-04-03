import cl from "styles/ui/Button.module.scss";
import classNames from "classnames";
import {ComponentPropsWithRef, FC} from "react";

const Button: FC<ComponentPropsWithRef<'button'>> = (
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