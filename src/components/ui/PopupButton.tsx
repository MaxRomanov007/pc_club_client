import cl from 'styles/ui/PopupButton.module.scss'
import {FC, MouseEventHandler, PropsWithChildren, useState} from "react";
import classNames from "classnames";
import Button from "components/ui/Button.tsx";

interface PopupButtonProps extends PropsWithChildren {
    text?: string
    className?: string
    visible?: boolean
    onVisibilityChange?: (isVisible: boolean) => void
}

const PopupButton: FC<PopupButtonProps> = (
    {
        text,
        className,
        children,
        visible,
        onVisibilityChange,
    }
) => {
    const [isVisible, setIsVisible] = useState<boolean>(visible || false)

    const changeVisibility: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()

        onVisibilityChange?.(!isVisible)

        setIsVisible(!isVisible)
    }

    return (
        <div className={classNames(cl.PopupButton, className)}>
            <Button
                className={classNames(isVisible && cl.PopupButton_visible)}
                onClick={changeVisibility}
            >
                {text}
            </Button>

            {!isVisible ?
                <></>
                :
                <div className={cl.PopupButton__popup}>
                    {children}
                </div>
            }
        </div>
    );
};

export default PopupButton;