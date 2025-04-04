import cl from "styles/ui/Button.module.scss";
import classNames from "classnames";
import {ComponentPropsWithRef, FC} from "react";
import {ButtonVariants} from "types/enums/ButtonVariants.ts";

interface ButtonProps extends ComponentPropsWithRef<'button'> {
    variant?: ButtonVariants;
}

const Button: FC<ButtonProps> = (
    {
        className,
        children,
        variant,
        ...props
    }
) => {
    return (
        <button
            className={classNames(cl.Button, className, variant === ButtonVariants.Outlined && cl.Button_outlined)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;