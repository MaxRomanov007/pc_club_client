import {ComponentPropsWithoutRef, FC, useEffect, useState} from 'react';
import {motion, AnimatePresence} from "motion/react"
import cl from "styles/ui/Notificator.module.scss";
import classNames from "classnames";

type Message = {
    id: number
    text: string
}

interface MessagesListProps extends ComponentPropsWithoutRef<"div">{
    messages: Message[]
}

const MessagesList: FC<MessagesListProps> = ({messages, className, ...props}) => {
    const [duration, setDuration] = useState<number>(0);

    useEffect(() => {
        const durationValue = parseFloat(
            getComputedStyle(document.documentElement)
                .getPropertyValue('--transition-duration')
                .trim()
        );

        if (!isNaN(durationValue)) {
            setDuration(durationValue);
        }
    }, []);


    return (
        <div className={classNames(cl.Notificator__messagesList, className)} {...props}>
            <AnimatePresence>
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        initial={{opacity: 0, y: -1000, marginBlock: '0.5em'}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, margin: 0, height: 0, y: -100}}
                        transition={{duration: duration * 2}}
                    >
                        <div className={cl.Notificator__message}>{message.text}</div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default MessagesList;