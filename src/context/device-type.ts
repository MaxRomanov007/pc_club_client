import {createContext} from "react";
import {DeviceTypes} from "types/enums/device-types.ts";

export const DeviceTypeContext = createContext<DeviceTypes>(DeviceTypes.mobileSmall);