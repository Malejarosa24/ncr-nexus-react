import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Register from "./pages/Register";
import Recovery from "./pages/Recovery";
import Usuarios from "./pages/Usuarios";
import Configuracion from "./pages/Configuracion";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Login />} />

                <Route path="/dashboard" element={<Dashboard />} />

                <Route path="/tickets" element={<Tickets />} />
                
                <Route path="/usuarios" element={<Usuarios/>} />

                <Route path="/register" element={<Register />} />

                <Route path="/recovery" element={<Recovery />} />
                
                <Route path="/configuracion" element={<Configuracion />} />
            
            </Routes>

        </BrowserRouter>

    );

}

export default App;