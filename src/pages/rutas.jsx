import { Routes,Route } from "react-router-dom";
import InicioBTC from "./inicio";
import Compra from "./compra";

const Rutas = () => {
    return ( <>
            <Routes>
            <Route path='/' element={<InicioBTC />} />
            <Route path='/inicio' element={<InicioBTC />}/>
            <Route path='/servers' element={<Compra />}/>
        </Routes>
    </> );
}

export default Rutas;