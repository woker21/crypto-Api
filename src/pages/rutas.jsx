import { Routes,Route } from "react-router-dom";
import InicioBTC from "./inicio";
import Compra from "./compra";
import CoinDetails from "../components/DetallesCripto";
import ConvertirMoneda from "./convertir";

const Rutas = () => {
    return ( <>
            <Routes>
            <Route path='/' element={<InicioBTC />} />
            <Route path='./inicio' element={<InicioBTC />}/>
            <Route path='/compra' element={<Compra />}/>
            <Route path='/convertir' element={<ConvertirMoneda/>}/>

        </Routes>
    </> );
}

export default Rutas;