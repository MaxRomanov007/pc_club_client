import {useNotification} from "@/hooks/useNotification.ts";
import {useFetchingWithoutRedirect} from "@/hooks/useFetching.ts";
import UserService from "@/api/services/UserService.ts";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from "react-router-dom";
import {registrationSchema} from "@/validations/registration.ts";
import {Tooltip} from "antd";
import Input from "components/ui/Input.tsx";
import Button from "components/ui/Button.tsx";
import cl from "styles/pages/RegistrationPage.module.scss"
import {useContext, useEffect} from "react";
import {UserContext} from "@/context/UserContext.ts";

type Credentials = {
    email: string
    password: string
    repeatPassword: string
}

const RegistrationForm = () => {
    const showNotification = useNotification();
    const [registration] = useFetchingWithoutRedirect(
        async (email: string, password: string) => {
            await UserService.register(email, password)
        }
    )
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(registrationSchema),
        mode: "onBlur"
    });
    const navigate = useNavigate()
    const [,,fetchUser] = useContext(UserContext)

    const onRegistrationSubmit: SubmitHandler<Credentials> = async (cred, e) => {
        e?.preventDefault()

        const status = await registration(cred.email, cred.password)
        switch (status) {
            case 200:
                showNotification("Вы успешно зарегистрировались")
                fetchUser()
                navigate("/profile")
                break
            default:
                showNotification("Не удалось осуществить зарегистрироваться")
        }
    }

    useEffect(() => {
        console.log(errors)
    }, [errors]);

    return (
        <form
            className={cl.RegistrationPage__form}
            onSubmit={handleSubmit(onRegistrationSubmit)}
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

            <label htmlFor="repeatPassword">Повторите пароль</label>
            <Tooltip placement="topRight" title={errors.repeatPassword?.message}>
                <Input
                    id="repeatPassword"
                    placeholder='Повторите пароль'
                    type='password'
                    minLength={8}
                    maxLength={100}
                    {...register('repeatPassword')}
                    invalid={!!errors.repeatPassword}
                    aria-invalid={!!errors.repeatPassword}
                />
            </Tooltip>

            <Button>Зарегистрироваться</Button>
        </form>
    );
};

export default RegistrationForm;