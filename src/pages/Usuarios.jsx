import "../styles/users.css";

import { useNavigate } from "react-router-dom";

function Usuarios() {

    const navigate = useNavigate();

    const usuarios = [
        {
            nombre: "Carlos",
            rol: "Administrador",
            estado: "Activo"
        },
        {
            nombre: "María",
            rol: "Soporte",
            estado: "Activo"
        },
        {
            nombre: "Juan",
            rol: "Técnico",
            estado: "Inactivo"
        }
    ];

    return (

        <div className="users-container">

            <div className="users-header">

                <div>

                    <h1>
                        Gestión de usuarios
                    </h1>

                    <p>
                        Administración del sistema
                    </p>

                </div>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Volver al dashboard
                </button>

            </div>

            <div className="users-table">

                <table>

                    <thead>

                        <tr>

                            <th>Nombre</th>

                            <th>Rol</th>

                            <th>Estado</th>

                        </tr>

                    </thead>

                    <tbody>

                        {usuarios.map((usuario, index) => (

                            <tr key={index}>

                                <td>{usuario.nombre}</td>

                                <td>{usuario.rol}</td>

                                <td>

                                    <span
                                        className={
                                            usuario.estado === "Activo"
                                            ? "status active"
                                            : "status inactive"
                                        }
                                    >
                                        {usuario.estado}
                                    </span>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default Usuarios;