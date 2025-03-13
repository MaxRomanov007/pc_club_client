import {FC, useContext, useMemo} from "react";
import Header from "components/layots/MainLayout/Header.tsx";
import cl from "styles/layouts/main-layout/main.module.scss";
import {DeviceTypeContext} from "@/context/device-type.ts";
import {DeviceTypes} from "types/enums/device-types.tsx";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    const deviceType = useContext(DeviceTypeContext);

    const isTablet = useMemo(() => deviceType > DeviceTypes.tablet, [deviceType]);

    return (
        <>
            <Header isTablet={isTablet}/>
            <main className={cl.main}>
                <div className={cl.main__container}>
                    <Outlet/>
                </div>
            </main>
        </>
    );
};

export default MainLayout;