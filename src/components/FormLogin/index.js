import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useHistory } from "react-router";
import "./styles.css";

const FormLogin = () => {  

    const history = useHistory()
    
    const formSchema = yup.object().shape({
        name: yup.string().min(2, "Deve conter no mínimo 2 caracteres").matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Deve conter somente letras").required("Nome obrigatório"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/, "Senha deve conter letra maiúscula, minúscula e caractere especial"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "As senhas devem ser idênticas").required("Senha obrigatória"),
    })

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver: yupResolver(formSchema), 
    })

    const submitData = (data) => {
        history.push(`/home/${data.name}`);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit(submitData)}>
                <div>
                    <TextField
                        label="Nome"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Senha"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Confirmar senha"
                        type="password"
                        margin="normal"
                        variant="outlined"
                        size="medium"
                        color="secondary"
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                    />
                </div>
                <div>
                    <Button variant="contained" type="submit" color="secondary"> Entrar </Button>
                </div>
            </form>
        </div>
    )
}

export default FormLogin;