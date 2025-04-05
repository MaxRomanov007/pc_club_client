import AppRouter from "@/router/AppRouter.tsx";
import {DeviceTypeContext} from "@/context/device-type.ts";
import {useEffect, useState} from "react";
import {DeviceTypes} from "types/enums/device-types.ts";
import Notificator from "components/ui/Notificator/Notificator.tsx";
import cl from "styles/App.module.scss";
import {IsAuthorizedContext} from "@/context/isAuthorized.ts";
import {ConfigProvider, theme} from "antd";

function App() {
    const [deviceType, setDeviceType] = useState<DeviceTypes>(DeviceTypes.mobileSmall);
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e: { matches: boolean | ((prevState: boolean) => boolean); }) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

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
            <ConfigProvider
                theme={{
                    algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
                }}
            >
                <DeviceTypeContext value={deviceType}>
                    <IsAuthorizedContext value={[isAuth, setIsAuth]}>
                        <Notificator className={cl.App__notificator}>
                            <AppRouter/>
                        </Notificator>
                    </IsAuthorizedContext>
                </DeviceTypeContext>
            </ConfigProvider>
        </>
    )
}

export default App
