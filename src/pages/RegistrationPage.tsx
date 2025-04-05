import PageTitle from "components/ui/PageTitle.tsx";
import cl from "styles/pages/LoginPage.module.scss";
import RegistrationForm from "components/RegistrationForm.tsx";

const RegistrationPage = () => {
    return (
        <>
            <PageTitle title="Регистрация"/>
            <div className={cl.LoginPage}>
                <RegistrationForm/>
            </div>
        </>
    );
};

export default RegistrationPage;