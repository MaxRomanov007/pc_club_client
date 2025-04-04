import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.tsx";
import PCTypesPage from "pages/PCTypesPage.tsx";
import PCTypeDetailsPage from "pages/PCTypeDetailsPage.tsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path='/restraunt'/>
                    <Route path='/pc' element={<PCTypesPage/>}/>
                    <Route path='/pc/:id' element={<PCTypeDetailsPage/>}/>
                    <Route path='/accaunt'/>
                    <Route path='/login' element={<></>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;