import "../styles/tickets.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    FaPlus,
    FaTrash,
    FaEdit,
    FaCheck,
    FaArrowLeft
} from "react-icons/fa";

function Tickets() {

    const navigate = useNavigate();

    const [cliente, setCliente] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [prioridad, setPrioridad] = useState("Alta");

    const [busqueda, setBusqueda] = useState("");

    const [ticketEditar, setTicketEditar] = useState(null);

    const [mostrarModal, setMostrarModal] = useState(false);

    const [ticketEliminar, setTicketEliminar] = useState(null);

    const [tickets, setTickets] = useState([

        {
            id: "TKT-001",
            cliente: "María",
            problema: "Error inicio sesión",
            estado: "Abierto",
            prioridad: "Alta",
            fecha: "24/05/2026"
        },

        {
            id: "TKT-002",
            cliente: "Juan",
            problema: "No carga sistema",
            estado: "En proceso",
            prioridad: "Media",
            fecha: "24/05/2026"
        },

        {
            id: "TKT-003",
            cliente: "Ana",
            problema: "Error impresora",
            estado: "Resuelto",
            prioridad: "Baja",
            fecha: "23/05/2026"
        }

    ]);

    // Agregar o editar ticket

    const guardarTicket = () => {

        if(cliente === "" || descripcion === ""){

            alert("Completa todos los campos");

            return;
        }

        // Editar

        if(ticketEditar){

            const ticketsActualizados = tickets.map((ticket) =>

                ticket.id === ticketEditar.id

                ? {
                    ...ticket,
                    cliente,
                    problema: descripcion,
                    prioridad
                }

                : ticket
            );

            setTickets(ticketsActualizados);

            setTicketEditar(null);

        } else {

            // Crear nuevo

            const nuevoTicket = {

                id: `TKT-00${tickets.length + 1}`,

                cliente,

                problema: descripcion,

                estado: "Abierto",

                prioridad,

                fecha: "24/05/2026"
            };

            setTickets([...tickets, nuevoTicket]);
        }

        setCliente("");
        setDescripcion("");
        setPrioridad("Alta");
    };

    // Cargar ticket para editar

    const editarTicket = (ticket) => {

        setCliente(ticket.cliente);

        setDescripcion(ticket.problema);

        setPrioridad(ticket.prioridad);

        setTicketEditar(ticket);
    };

    // Abrir modal eliminar

    const abrirModalEliminar = (ticket) => {

        setMostrarModal(true);

        setTicketEliminar(ticket);
    };

    // Confirmar eliminar

    const confirmarEliminar = () => {

        const nuevosTickets = tickets.filter(

            (ticket) => ticket.id !== ticketEliminar.id
        );

        setTickets(nuevosTickets);

        setMostrarModal(false);

        setTicketEliminar(null);
    };

    // Cambiar estado

    const cambiarEstado = (id) => {

        const nuevosTickets = tickets.map((ticket) => {

            if(ticket.id === id){

                if(ticket.estado === "Abierto"){

                    return {
                        ...ticket,
                        estado: "En proceso"
                    };
                }

                if(ticket.estado === "En proceso"){

                    return {
                        ...ticket,
                        estado: "Resuelto"
                    };
                }

                return {
                    ...ticket,
                    estado: "Abierto"
                };
            }

            return ticket;
        });

        setTickets(nuevosTickets);
    };

    // Estadísticas automáticas

    const abiertos = tickets.filter(
        (ticket) => ticket.estado === "Abierto"
    ).length;

    const proceso = tickets.filter(
        (ticket) => ticket.estado === "En proceso"
    ).length;

    const resueltos = tickets.filter(
        (ticket) => ticket.estado === "Resuelto"
    ).length;

    return (

        <div className="tickets-container">

            {/* Header */}

            <div className="tickets-header">

                <div>

                    <h1>
                        Gestión de tickets
                    </h1>

                    <p>
                        Administración de incidencias
                    </p>

                </div>

                <button
                    className="back-btn"
                    onClick={() => navigate("/dashboard")}
                >

                    <FaArrowLeft />

                    Volver al dashboard

                </button>

            </div>

            {/* Estadísticas */}

            <div className="stats-grid">

                <div className="stat-card open-card">

                    <h3>Abiertos</h3>

                    <p>{abiertos}</p>

                </div>

                <div className="stat-card process-card">

                    <h3>En proceso</h3>

                    <p>{proceso}</p>

                </div>

                <div className="stat-card resolved-card">

                    <h3>Resueltos</h3>

                    <p>{resueltos}</p>

                </div>

            </div>

            {/* Formulario */}

            <div className="ticket-form">

                <h2>

                    {ticketEditar

                        ? "Editar ticket"

                        : "Registrar ticket"}

                </h2>

                <div className="form-grid">

                    <input
                        type="text"
                        placeholder="Cliente"
                        value={cliente}
                        onChange={(e) => setCliente(e.target.value)}
                    />

                    <select
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)}
                    >

                        <option>Alta</option>

                        <option>Media</option>

                        <option>Baja</option>

                    </select>

                </div>

                <textarea
                    placeholder="Descripción del problema..."
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <button
                    className="save-btn"
                    onClick={guardarTicket}
                >

                    <FaPlus />

                    {ticketEditar

                        ? "Actualizar ticket"

                        : "Guardar ticket"}

                </button>

            </div>

            {/* Tabla */}

            <div className="tickets-table">

                <div className="table-top">

                    <h2>
                        Lista de tickets
                    </h2>

                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={busqueda}
                        onChange={(e) =>
                            setBusqueda(e.target.value)
                        }
                    />

                </div>

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Cliente</th>

                            <th>Problema</th>

                            <th>Estado</th>

                            <th>Prioridad</th>

                            <th>Fecha</th>

                            <th>Acciones</th>

                        </tr>

                    </thead>

                    <tbody>

                        {tickets

                        .filter((ticket) =>

                            ticket.cliente
                            .toLowerCase()
                            .includes(busqueda.toLowerCase())
                        )

                        .map((ticket) => (

                            <tr key={ticket.id}>

                                <td>{ticket.id}</td>

                                <td>{ticket.cliente}</td>

                                <td>{ticket.problema}</td>

                                <td>

                                    <span className={`status ${ticket.estado}`}>

                                        {ticket.estado}

                                    </span>

                                </td>

                                <td>{ticket.prioridad}</td>

                                <td>{ticket.fecha}</td>

                                <td className="actions">

                                    <button
                                        className="edit-btn"
                                        onClick={() =>
                                            editarTicket(ticket)
                                        }
                                    >

                                        <FaEdit />

                                    </button>

                                    <button
                                        className="status-btn"
                                        onClick={() =>
                                            cambiarEstado(ticket.id)
                                        }
                                    >

                                        <FaCheck />

                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            abrirModalEliminar(ticket)
                                        }
                                    >

                                        <FaTrash />

                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {/* Modal */}

            {mostrarModal && (

                <div className="modal-overlay">

                    <div className="modal">

                        <h2>
                            ¿Eliminar ticket?
                        </h2>

                        <p>
                            Esta acción no se puede deshacer.
                        </p>

                        <div className="modal-buttons">

                            <button
                                className="cancel-btn"
                                onClick={() =>
                                    setMostrarModal(false)
                                }
                            >

                                Cancelar

                            </button>

                            <button
                                className="confirm-btn"
                                onClick={confirmarEliminar}
                            >

                                Eliminar

                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );
}

export default Tickets;