import cl from 'styles/ui/PopupButton.module.scss'
import {FC, MouseEventHandler, PropsWithChildren, useContext, useRef, useState} from "react";
import classNames from "classnames";
import Button from "components/ui/Button.tsx";
import {DeviceTypeContext} from "@/context/device-type.ts";
import {DeviceTypes} from "types/enums/device-types.tsx";
import Modal from "components/ui/Modal.tsx";

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
    const buttonRef = useRef<HTMLButtonElement>(null)
    const popupRef = useRef<HTMLDivElement>(null)
    const device = useContext(DeviceTypeContext)

    const onMainButtonClick: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()
        changeVisibility()
    }

    const changeVisibility = () => {
        onVisibilityChange?.(!isVisible)
        if (isVisible) {
            buttonRef?.current?.classList.remove(cl.PopupButton__button_visible)

            popupRef?.current?.classList.add(cl.PopupButton__popup_exit)

            setTimeout(() => {
                popupRef?.current?.classList.remove(cl.PopupButton__popup_exit)
                setIsVisible(false)
            }, 200)
        } else {
            if (device >= DeviceTypes.tablet) {
                buttonRef?.current?.classList.add(cl.PopupButton__button_visible)
            }
            setIsVisible(true)
        }
    }

    return (
        <div className={classNames(cl.PopupButton, className)}>
            <Button
                className={cl.PopupButton__button}
                ref={buttonRef}
                onClick={onMainButtonClick}
            >
                {text}
            </Button>

            {!isVisible ?
                <></>
                :
                device < DeviceTypes.tablet ?
                    <Modal opened onClose={changeVisibility}>
                        {children}
                    </Modal>
                    :
                    <div className={cl.PopupButton__popup} ref={popupRef}>
                        {children}
                    </div>
            }
        </div>
    );
};

export default PopupButton;