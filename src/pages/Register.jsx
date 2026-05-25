import "../styles/register.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Register() {

    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    const registrarUsuario = () => {

        if(nombre === "" || correo === "" || password === ""){

            alert("Completa todos los campos");
            return;
        }

        alert("Usuario registrado correctamente");

        navigate("/");

    };

    return (

        <div className="register-container">

            <div className="register-card">

                <h1>
                    Crear cuenta
                </h1>

                <p>
                    Registro de usuarios NCR Nexus
                </p>

                <input
                    type="text"
                    placeholder="Nombre completo"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button onClick={registrarUsuario}>
                    Registrarse
                </button>

                <span onClick={() => navigate("/")}>
                    Volver al login
                </span>

            </div>

        </div>

    );

}

export default Register;