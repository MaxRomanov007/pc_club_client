import {useContext} from "react";
import {NotificatorContext} from "@/context/notificator.ts";

export const useNotification = () => useContext(NotificatorContext)