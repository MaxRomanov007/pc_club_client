import {FC, MouseEventHandler, PropsWithChildren, useState} from 'react';
import cl from 'styles/ui/Modal.module.scss';
import classNames from "classnames";

interface ModalProps extends PropsWithChildren {
    opened?: boolean
    onClose?: () => void
}

const Modal: FC<ModalProps> = ({opened, onClose, children}) => {
    const [isOpen, setIsOpen] = useState<boolean>(opened ?? false)

    const onCloseButtonClick: MouseEventHandler<HTMLDivElement> = () => {
        setIsOpen(false)
        onClose?.()
    }

    return (
        <div className={classNames(isOpen && cl.Modal_opened)}>
            {!isOpen ?
                <></>
                :
                <div className={cl.Modal__content}>
                    <div className={cl.Modal__controls}>
                        <div
                            className={cl.Controls__close}
                            onClick={onCloseButtonClick}
                        />
                    </div>

                    <div>
                        {children}
                    </div>
                </div>
            }

        </div>
    );
};

export default Modal;