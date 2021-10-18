import { useHistory, useParams } from "react-router";
import { Button } from "@material-ui/core"
import "./styles.css";

const Home = () => {

    const history = useHistory()
    const { name } = useParams()

    return (
        <div className="home-container">
            <h1 className="home-title"> Olá, {name} </h1>
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