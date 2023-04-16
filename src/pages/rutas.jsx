import { Routes,Route } from "react-router-dom";
import InicioBTC from "./inicio";
import Compra from "./compra";
import CoinDetails from "../components/DetallesCripto";

const Rutas = () => {
    return ( <>
            <Routes>
            <Route path='/' element={<InicioBTC />} />
            <Route path='./inicio' element={<InicioBTC />}/>
            <Route path='/compra' element={<Compra />}/>


        </Routes>
    </> );
}

export default Rutas;