import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";
import CoinDetails from "./components/DetallesCripto";



function App() {

  // estado de coin, search y selectedCoin
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  //.


// Optener datos de la api
  const getData = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setCoins(res.data);
    } catch (error) {
      console.error(error);
    }
  };
//.




 //carga el contenido de la api una vez que cargue todo
  useEffect(() => {
    getData();
  }, []);

//cambia el valor de Detalles de la cripto
  const SeleccionarCoin = (coin) => {
    setSelectedCoin(coin);
  };

  return (
    <div id="container" className="container">
      <div className="d-flex p-2 flex-wrap flex-row-reverse">

        {/*Buscador de coins */}
        <input
          type="text"
          placeholder="Busca una Coin"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          autoFocus
          onChange={(e) => setSearch(e.target.value)}
        />

        {/*Tabla de las criptos*/}
        <TableCoins coins={coins} search={search} onSelectCoin={SeleccionarCoin} />

        {/*Caja de informacion*/}
        <CoinDetails coin={selectedCoin} />
      </div>
    </div>
  );
}

export default App;
