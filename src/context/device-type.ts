import {createContext} from "react";
import {DeviceTypes} from "types/enums/device-types.tsx";

export const DeviceTypeContext = createContext<DeviceTypes>(DeviceTypes.mobileSmall);