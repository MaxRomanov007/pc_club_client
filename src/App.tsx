import AppRouter from "@/router/AppRouter.tsx";
import {DeviceTypeContext} from "@/context/device-type.ts";
import {useEffect, useState} from "react";
import {DeviceTypes} from "types/enums/device-types.tsx";

function App() {
    const [deviceType, setDeviceType] = useState<DeviceTypes>(DeviceTypes.mobileSmall);

    const handleResize = () => {
        const width = window.innerWidth;
        if (width > DeviceTypes.desktop) {
            setDeviceType(DeviceTypes.desktopAbove);
        } else if (width > DeviceTypes.tablet) {
            setDeviceType(DeviceTypes.desktop)
        } else if (width > DeviceTypes.mobile) {
            setDeviceType(DeviceTypes.tablet)
        } else if (width > DeviceTypes.mobileSmall) {
            setDeviceType(DeviceTypes.mobile)
        } else {
            setDeviceType(DeviceTypes.mobileSmall)
        }
    }

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <DeviceTypeContext value={deviceType}>
                <AppRouter/>
            </DeviceTypeContext>
        </>
    )
}

export default App
