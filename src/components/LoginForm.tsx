import cl from "styles/pages/LoginPage.module.scss";
import Input from "components/ui/Input.tsx";
import Button from "components/ui/Button.tsx";
import {useNotification} from "@/hooks/useNotification.ts";
import {useFetchingWithoutRedirect} from "@/hooks/useFetching.ts";
import UserService from "@/api/services/UserService.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/validations/login.ts";
import {Tooltip} from "antd";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "@/context/UserContext.ts";

type Credentials = {
    email: string
    password: string
}

const LoginForm = () => {
    const showNotification = useNotification();
    const [login] = useFetchingWithoutRedirect(
        async (email: string, password: string) => {
            await UserService.login(email, password)
        }
    )
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(loginSchema),
        mode: "onBlur"
    });
    const navigate = useNavigate()
    const [,,fetchUser] = useContext(UserContext)

    const onLoginSubmit: SubmitHandler<Credentials> = async (cred, e) => {
        e?.preventDefault()

        const status = await login(cred.email, cred.password)
        switch (status) {
            case 200:
                showNotification("Вы успешно авторизовались")
                fetchUser()
                navigate("/profile")
                break
            case 401:
                showNotification("Неверные логин или пароль")
                break
            default:
                showNotification("Не удалось осуществить вход")
        }
    }

    return (
        <form
            className={cl.LoginPage__form}
            onSubmit={handleSubmit(onLoginSubmit)}
            noValidate
        >

            <label htmlFor="email">Email</label>
            <Tooltip placement="topRight" title={errors.email?.message}>
                <Input
                    id="email"
                    placeholder='Email'
                    type='email'
                    maxLength={100}
                    {...register('email')}
                    invalid={!!errors.email}
                    aria-invalid={!!errors.email}
                />
            </Tooltip>

            <label htmlFor="password">Пароль</label>
            <Tooltip placement="topRight" title={errors.password?.message}>
                <Input
                    id="password"
                    placeholder='Пароль'
                    type='password'
                    minLength={8}
                    maxLength={100}
                    {...register('password')}
                    invalid={!!errors.password}
                    aria-invalid={!!errors.password}
                />
            </Tooltip>

            <Button>Войти</Button>
        </form>
    );
};

export default LoginForm;