import {object, string} from "yup";

export const loginSchema = object().shape({
    email: string()
        .email("Введите корректный email")
        .required("Введите email")
        .max(100, "Email не должен превышать 100 символов"),
    password: string()
        .required("Введите пароль")
        .min(8, "Пароль должен быть не менее 8 символов")
        .max(100, "Пароль не должен превышать 100 символов")
});