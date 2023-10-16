import React, {useState} from "react";
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const onButtonClick = () => {

        setUsernameError("");
        setPasswordError("");

        if (username === "") {
            setUsernameError("Por favor ingrese un nombre de usuario");
            return;
        }

        if (password === "") {
            setPasswordError("Por favor ingrese una contraseña");
            return;
        }

        if (password.length < 8) {
            setPasswordError("La contraseña debe tener como mínimo 8 caracteres");
            return;
        }

        logIn();
    }

    const logIn = () => {
        fetch("https://dummyjson.com/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
        .then(result => result.json())
        .then(resultado => {
            if (resultado.username) {
                localStorage.setItem("user", JSON.stringify({
                    username: username,
                    email: resultado.email,
                    fullName: resultado.firstName + " " + resultado.lastName
                }));
                props.setLoggedIn(true);
                props.setUsername(username);
                navigate("/")
            } else {
                window.alert("Credenciales inválidas");
            }
        })
    }

    return <div>
        <div>
            <label>Inicio de sesión</label>
        </div>
        <br />
        <div>
            <div>
                <input
                    className="login-input"
                    value={username}
                    placeholder="Ingrese su nombre de usuario"
                    onChange={value => setUserName(value.target.value)} />
                <label className="user-name-error">{ usernameError }</label>
            </div>
            <div>
                <input
                    className="login-input"
                    value={password}
                    placeholder="Ingrese su contraseña"
                    onChange={value => setPassword(value.target.value)} />
                <label className="password-name-error">{ passwordError }</label>
            </div>
        </div>
        <br />
        <div>
            <input 
                type="button"
                onClick={onButtonClick}
                value={"Iniciar sesión"}/>
        </div>
    </div>
}

export default Login;