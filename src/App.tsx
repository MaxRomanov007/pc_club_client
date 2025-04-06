import AppRouter from "@/router/AppRouter.tsx";
import Notificator from "components/ui/Notificator/Notificator.tsx";
import cl from "styles/App.module.scss";
import DeviceTypeContextProvider from "components/context-providers/DeviceTypeContextProvider.tsx";
import UserContextProvider from "components/context-providers/UserContextProvider.tsx";

function App() {
    return (
        <>
            <DeviceTypeContextProvider>
                <UserContextProvider>
                    <Notificator className={cl.App__notificator}>
                        <AppRouter/>
                    </Notificator>
                </UserContextProvider>
            </DeviceTypeContextProvider>
        </>
    )
}

export default App
