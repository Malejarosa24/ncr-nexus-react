import "../styles/dashboard.css";
import { useNavigate } from "react-router-dom";

import {
    FaHome,
    FaTicketAlt,
    FaUsers,
    FaCog,
    FaClock,
    FaCheckCircle
} from "react-icons/fa";

function Dashboard() {
    const navigate = useNavigate();
    return (

        <div className="dashboard-container">

            {/* Sidebar */}

            <aside className="sidebar">

                <div className="logo">

                    <h2>
                        NCR Nexus
                    </h2>

                    <p>
                        Sistema inteligente
                    </p>

                </div>

                <ul>

                    <li className="active"
                    onClick={() => navigate("/dashboard")}
                    >
                        <FaHome />
                        Inicio
                    </li>

                    <li
                     className="active" 
                     onClick={() => navigate("/tickets")}
                     >
                        <FaTicketAlt />
                        Tickets
                    </li>

                    <li
                     className="active"
                     onClick={() => navigate("/usuarios")}
                    >
                        <FaUsers />
                        Usuarios
                    </li>

                    <li
                    className="active"
                    onClick={() => navigate("/configuracion")}
                    >
                        <FaCog />
                        Configuración
                    </li>
                  
                    <li
                    className="logout-btn"
                    onClick={() => navigate("/")}
                    >
                     Cerrar sesión
                    </li>
                    
                </ul>

            </aside>

            {/* Contenido */}

            <main className="dashboard-content">

                {/* Header */}

                <div className="dashboard-header">

                    <div>

                        <h1>
                            Módulo de soporte técnico
                        </h1>

                        <p>
                            Gestión de tickets e incidencias
                        </p>

                    </div>

                    <div className="user-box">

                        <h3>
                            Carlos
                        </h3>

                        <span>
                            Soporte técnico
                        </span>

                    </div>

                </div>

                {/* Cards */}

                <div className="cards">

                    <div className="card green">

                        <div className="icon">
                            <FaTicketAlt />
                        </div>

                        <div>

                            <h3>
                                Tickets abiertos
                            </h3>

                            <p>
                                12
                            </p>

                        </div>

                    </div>

                    <div className="card yellow">

                        <div className="icon">
                            <FaClock />
                        </div>

                        <div>

                            <h3>
                                Pendientes
                            </h3>

                            <p>
                                4
                            </p>

                        </div>

                    </div>

                    <div className="card blue">

                        <div className="icon">
                            <FaCheckCircle />
                        </div>

                        <div>

                            <h3>
                                Resueltos
                            </h3>

                            <p>
                                8
                            </p>

                        </div>

                    </div>

                </div>

                {/* Tabla */}

                <div className="table-container">

                    <div className="table-header">

                        <h2>
                            Lista de tickets
                        </h2>

                        <input
                            type="text"
                            placeholder="Buscar ticket..."
                        />

                    </div>

                    <table>

                        <thead>

                            <tr>

                                <th>ID Ticket</th>

                                <th>Cliente</th>

                                <th>Problema</th>

                                <th>Estado</th>

                                <th>Fecha</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>TKT-001</td>

                                <td>María</td>

                                <td>Error inicio sesión</td>

                                <td>
                                    <span className="status open">
                                        Abierto
                                    </span>
                                </td>

                                <td>24/05/2026</td>

                            </tr>

                            <tr>

                                <td>TKT-002</td>

                                <td>Juan</td>

                                <td>No carga sistema</td>

                                <td>
                                    <span className="status process">
                                        En proceso
                                    </span>
                                </td>

                                <td>24/05/2026</td>

                            </tr>

                            <tr>

                                <td>TKT-003</td>

                                <td>Ana</td>

                                <td>Error impresora</td>

                                <td>
                                    <span className="status solved">
                                        Resuelto
                                    </span>
                                </td>

                                <td>23/05/2026</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </main>

        </div>

    );

}

export default Dashboard;