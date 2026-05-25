import "../styles/recovery.css";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

function Recovery() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");

    const recuperarCuenta = () => {

        if(correo === ""){

            alert("Ingresa un correo");
            return;
        }

        alert("Se enviaron instrucciones al correo");

        navigate("/");

    };

    return (

        <div className="recovery-container">

            <div className="recovery-card">

                <h1>
                    Recuperar cuenta
                </h1>

                <p>
                    Ingresa tu correo electrónico
                </p>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                />

                <button onClick={recuperarCuenta}>
                    Recuperar contraseña
                </button>

                <span onClick={() => navigate("/")}>
                    Volver al login
                </span>

            </div>

        </div>

    );

}

export default Recovery;