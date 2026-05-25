import "../styles/configuracion.css";

import { useNavigate } from "react-router-dom";

function Configuracion() {

    const navigate = useNavigate();

    return (

        <div className="config-container">

            {/* Header */}

            <div className="config-header">

                <div>

                    <h1>
                        Configuración
                    </h1>

                    <p>
                        Ajustes generales del sistema
                    </p>

                </div>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Volver al dashboard
                </button>

            </div>

            {/* Card */}

            <div className="config-card">

                <h2>
                    Preferencias del sistema
                </h2>

                <div className="config-group">

                    <label>
                        Nombre del sistema
                    </label>

                    <input
                        type="text"
                        placeholder="NCR Nexus"
                    />

                </div>

                <div className="config-group">

                    <label>
                        Correo de soporte
                    </label>

                    <input
                        type="email"
                        placeholder="soporte@ncr.com"
                    />

                </div>

                <div className="config-group">

                    <label>
                        Tema del sistema
                    </label>

                    <select>

                        <option>
                            Oscuro
                        </option>

                        <option>
                            Claro
                        </option>

                    </select>

                </div>

                <button className="save-btn">

                    Guardar cambios

                </button>

            </div>

        </div>

    );

}

export default Configuracion;