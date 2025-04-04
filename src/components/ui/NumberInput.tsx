import {FC, MouseEventHandler, useState} from "react";
import cl from "styles/ui/NumberInput.module.scss"
import classNames from "classnames";

interface NumberInputProps {
    value?: number
    onValueChange?: (value: number) => void
    min?: number
    max?: number
    step?: number
    className?: string
}

const NumberInput: FC<NumberInputProps> = (
    {
        value = 0,
        onValueChange,
        min = Math.max(),
        max = Math.min(),
        step = 1,
        className
    }
) => {
    const [val, setVal] = useState<number>(value)

    const valueDown: MouseEventHandler<HTMLDivElement> = () => {
        if (val - step < min) {
            return
        }

        setVal(val - step)
        onValueChange?.(val - step)
    }
    const valueUp: MouseEventHandler<HTMLDivElement> = () => {
        if (val + step > max) {
            return
        }

        setVal(val + step)
        onValueChange?.(val + step)
    }

    return (
        <div className={classNames(cl.NumberInput, className)}>
            <div
                className={cl.NumberInput__minus}
                onClick={valueDown}
            />

            <h4 className={cl.NumberInput__value}>
                {val}
            </h4>

            <div
                className={cl.NumberInput__plus}
                onClick={valueUp}
            />
        </div>
    );
};

export default NumberInput;