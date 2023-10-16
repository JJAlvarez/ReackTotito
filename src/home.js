import React from "react"
import { useNavigate } from "react-router-dom"

const Home = (props) => { 
    const { loggedIn, username } = props
     
    console.log(localStorage.getItem("user"));
    let fullName = JSON.parse(localStorage.getItem("user")).fullName;

    const navigate = useNavigate();

    const clickDeBoton = () => {
        if (loggedIn) {
            localStorage.removeItem("user");
            props.setLoggedIn(false);
        } else {
            navigate("/login")
        }
    }

    return <div>
        <div className="">
            <label>Bienvenido!</label>
        </div>
        <div>
            Esta es la página de inicio.
        </div>
        <div>
            <input 
                type="button" 
                onClick={clickDeBoton} 
                value={loggedIn ? "Cerrar Sesión" : "Iniciar sesión" }/>
            
            {(loggedIn ? <div>
                <label>Tu nombre de usuario es {username}</label>
                <br />
                <label>Tu nombre completo es: {fullName}</label>
            </div> : <></>)}
        </div>
    </div>
}

export default Home