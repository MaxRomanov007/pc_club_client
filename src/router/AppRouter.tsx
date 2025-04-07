import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout.tsx";
import PCTypesPage from "pages/PCTypesPage.tsx";
import PCTypeDetailsPage from "pages/PCTypeDetailsPage.tsx";
import LoginPage from "pages/LoginPage.tsx";
import RegistrationPage from "pages/RegistrationPage.tsx";
import DishesPage from "pages/DishesPage.tsx";
import DishDetailsPage from "pages/DishDetailsPage.tsx";
import ProfilePage from "pages/ProfilePage.tsx";
import ScrollToTop from "components/utils/ScrollToTop.ts";

const AppRouter = () => {

    return (
        <BrowserRouter>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route path='/restraunt' element={<DishesPage/>}/>
                    <Route path='/restraunt/:id' element={<DishDetailsPage/>}/>
                    <Route path='/pc' element={<PCTypesPage/>}/>
                    <Route path='/pc/:id' element={<PCTypeDetailsPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/registration' element={<RegistrationPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;