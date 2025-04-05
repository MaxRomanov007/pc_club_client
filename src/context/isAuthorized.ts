import {createContext} from "react";

type IsAuthorizedContextValue = [boolean, (isAuthorized: boolean) => void]

export const IsAuthorizedContext = createContext<IsAuthorizedContextValue>([false, () => {}])