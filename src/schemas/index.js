import * as yup from "yup"

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,24}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;


export const registerSchema = yup.object().shape({
    email: yup
        .string()
        .email("Неверный адрес электронной почты")
        .required("Требуется адрес электронной почты"),
        
    login: yup
        .string()
        .min(4, 'Минимум 4 символа')
        .matches(/^[A-Za-z]*$/, 'Только латинские буквы разрешены')
        .required('Требуется логин'),
        
    password: yup
        .string()
        .min(8, 'От 8 до 15 символов')
        .max(15, 'От 8 до 15 символов')
        .matches(/[a-z]/, 'Строчные и прописные буквы')
        .matches(/[A-Z]/, 'Строчные и прописные буквы')
        .matches(/\d/, 'Минимум 1 цифра')
        .matches(/[^a-zA-Z0-9]/, 'Минимум 1 спецсимвол (!, ", #, $...)')
        .required('Требуется пароль'),
        
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Пароли должны совпадать")
        .required("Пароли должны совпадать")
})

export const loginSchema = yup.object().shape({
    login: yup
        .string()
        .min(4, 'Минимум 4 символа')
        .matches(/^[A-Za-z]*$/, 'Только латинские буквы разрешены')
        .required('Требуется логин'),
        
    password: yup
        .string()
        .min(5, 'От 8 до 15 символов')
        .max(15, 'От 8 до 15 символов')
        .matches(/[a-z]/, 'Строчные и прописные буквы')
        .matches(/[A-Z]/, 'Строчные и прописные буквы')
        .matches(/\d/, 'Минимум 1 цифра')
        .matches(/[^a-zA-Z0-9]/, 'Минимум 1 спецсимвол (!, ", #, $...)')
        .required('Требуется пароль'),
})


