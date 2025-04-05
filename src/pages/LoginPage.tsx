import cl from "styles/pages/LoginPage.module.scss"
import {Link} from "react-router-dom";
import PageTitle from "components/ui/PageTitle.tsx";
import LoginForm from "components/LoginForm.tsx";

const LoginPage = () => {

    return (
        <>
            <PageTitle title="Авторизация"/>
            <div className={cl.LoginPage}>
                <div className={cl.LoginPage__container}>
                    <LoginForm/>

                    <div className={cl.LoginPage__links}>
                        <Link className={cl.Links__link} to="/registration">Регистрация</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;