import {createContext} from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type showFunc = (...content: any) => void;

export const NotificatorContext = createContext<showFunc>(async () => {});