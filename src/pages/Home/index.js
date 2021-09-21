import { useHistory, useParams } from "react-router";
import { Button, Typography } from "@material-ui/core"
import "./styles.css";

const Home = () => {

    const history = useHistory()
    const { name } = useParams()

    return (
        <div className="home-container">
            <Typography variant="h1" gutterBottom>
                Olá, {name}
            </Typography>

            <div>
                <Button 
                    onClick={() => history.push("/") }
                    size="large"
                    variant="contained" 
                    > 
                    Voltar 
                </Button>
            </div>
       </div>
    )
}

export default Home;