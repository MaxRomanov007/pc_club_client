import {ComponentPropsWithoutRef, FC, useState} from 'react';
import {NotificatorContext} from "@/context/notificator.ts";
import MessagesList from "components/ui/Notificator/MessagesList.tsx";

interface NotificatorProps extends ComponentPropsWithoutRef<'div'> {
    timeout?: number
}

type Message = {
    id: number
    text: string
}

const Notificator:FC<NotificatorProps> = (
    {
        timeout = 3000,
        children,
        ...props
    }) => {
    const [lastMessageID, setLastMessageID] = useState<number>(0);
    const [messages, setMessages] = useState<Message[]>([])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const show = (...content: any) => {
        if (!content.toString()) {
            return
        }
        setMessages((prevMessages) => [...prevMessages, {text: content.toString(), id: lastMessageID}])
        setLastMessageID(lastMessageID + 1)
        setTimeout(() => {
            setMessages((prevMessages) => prevMessages.slice(1))
        }, timeout)
    }

    return (
        <NotificatorContext.Provider value={show}>
            <MessagesList messages={messages} {...props}/>
            {children}
        </NotificatorContext.Provider>
    );
};

export default Notificator;