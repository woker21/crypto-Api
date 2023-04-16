import CoinRow from "./CoinRow";


//nombre de las columnas
const titles = ["#", "Coin", "Precio", "Cambios", "24h Volume"];

const TableCoins = ({ coins, search, onSelectCoin, selectedCoin }) => {
  //filtro para las busquedas de las coins
  const filteredCoins = coins?.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <table className="table table-dark mt-4 table-hover" id="tabla-price">
      <thead>
        <tr>

          {/*hacemos map para iterar cada coin en la tabla*/}
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins?.map((coin, index) => (
          //llamamos al componente coinRow para crear cada fila
          <CoinRow
            key={coin.id}
            coin={coin}
            index={index + 1}
            onSelectCoin={onSelectCoin}
            selectedCoin={selectedCoin}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoins;
