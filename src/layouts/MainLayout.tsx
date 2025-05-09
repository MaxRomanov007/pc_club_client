import {FC, useContext, useMemo} from "react";
import Header from "components/MainLayout/Header.tsx";
import cl from "styles/layouts/main-layout/main.module.scss";
import {DeviceTypeContext} from "@/context/device-type.ts";
import {DeviceTypes} from "types/enums/device-types.ts";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
    const deviceType = useContext(DeviceTypeContext);

    const isMobile = useMemo(() => deviceType <= DeviceTypes.mobile, [deviceType])

    return (
        <>
            <Header isMobile={isMobile}/>
            <main className={cl.main}>
                <div className={cl.main__container}>
                    <Outlet/>
                </div>
            </main>
            <footer className={cl.footer}></footer>
        </>
    );
};

export default MainLayout;