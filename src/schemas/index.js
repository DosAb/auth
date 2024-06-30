import * as yup from "yup"

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{5,24}$/;


const basicSchema = yup.object().shape({
    email: yup.string().email("Please eneter valid email").required("Requiered"),
    age: yup.number().positive().integer().required("Requiered"),
    password: yup.string().min(5).matches(PWD_REGEX, {message:" Please create stronger password"}).required("Requiered"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required")
})

