import { Typography } from "@material-ui/core";
import FormLogin from "../../components/FormLogin"


const Login = () => {
    return (
        <>
            <Typography variant="h1" gutterBottom fontSize="80px" color="white"> Faça seu login </Typography>
            <FormLogin/>
        </>
    )
}

export default Login;