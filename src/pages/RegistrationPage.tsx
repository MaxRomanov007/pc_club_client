import PageTitle from "components/utils/PageTitle.ts";
import cl from "styles/pages/RegistrationPage.module.scss";
import RegistrationForm from "components/RegistrationForm.tsx";

const RegistrationPage = () => {
    return (
        <>
            <PageTitle title="Регистрация"/>
            <div className={cl.RegistrationPage}>
                <RegistrationForm/>
            </div>
        </>
    );
};

export default RegistrationPage;