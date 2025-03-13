import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.tsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route path='/restraunt' element={
                        <h1>;alskdf j;asdkjf;s dfsdfsasfasfgsdfgsdf gsdfgsdfgsdfgsdfgsd fgsdfgsdfgsdfgsdf</h1>
                    }/>
                    <Route path='/pc'/>
                    <Route path='/accaunt'/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;