import {ComponentPropsWithoutRef, FC} from 'react';
import classNames from "classnames";
import cl from "styles/ui/Input.module.scss"

interface InputProps extends ComponentPropsWithoutRef<"input"> {
    invalid?: boolean
}

const Input: FC<InputProps> = (
    {
        invalid,
        className,
        ...props
    }
) => {
    return (
        <input className={classNames(cl.Input, invalid && cl.Input_invalid, className)} {...props}/>
    );
};

export default Input;