import "../styles/login.css";

import hero from "../assets/login-bg.png";

import { Link, useNavigate } from "react-router-dom";

function Login() {

    // Navegación entre páginas
    const navigate = useNavigate();

    // Función temporal login
    const iniciarSesion = (e) => {

        e.preventDefault();

        navigate("/dashboard");

    };

    return (

        <div
            className="login-container"
            style={{
                backgroundImage: `url(${hero})`
            }}
        >

            {/* Oscurece un poco el fondo */}
            <div className="overlay"></div>

            {/* Card login */}
            <div className="login-card">

                <h1>
                    Bien<span>venido</span>
                </h1>

                <p>
                    Inicia sesión para continuar
                </p>

                <form onSubmit={iniciarSesion}>

                    <input
                        type="text"
                        placeholder="Usuario"
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                    />

                    <button type="submit">
                        Iniciar sesión
                    </button>

                </form>

                <div className="login-links">

                    <Link to="/recovery">
                        ¿Olvidó su contraseña?
                    </Link>

                    <Link to="/register">
                        Registrarse
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default Login;