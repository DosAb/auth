import * as yup from "yup"

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,24}$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;


export const basicSchema = yup.object().shape({
    email: yup.string().email("Please eneter valid email").required("Requiered"),
    age: yup.number().positive().integer().required("Requiered"),
    login: yup.string().min(5).matches(USER_REGEX, {message: 'Только латинские буквы разрешены'}),
    // password: yup.string().min(5).matches(PWD_REGEX, {message:" Please create stronger password"}).required("Requiered"),
    password: yup
    .string()
    .min(5, 'От 8 до 15 символов')
    .max(15, 'От 8 до 15 символов')
    .matches(/[a-z]/, 'Строчные и прописные буквы')
    .matches(/[A-Z]/, 'Строчные и прописные буквы')
    .matches(/\d/, 'Минимум 1 цифра')
    .matches(/[^a-zA-Z0-9]/, 'Минимум 1 спецсимвол (!, ", #, $...)')
    .required('Требуется пароль'),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required")
})

