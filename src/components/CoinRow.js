
const CoinRow = ({ coin, index, onSelectCoin, selectedCoin }) => {

  // se ejecuta cuando el usuario selecciona la fila y agregamos el valor de coin
  const SeleccionarCoin = () => {
    onSelectCoin(coin);
  };

   // Retornamos la informacion de cada coin que se itera 
  return (
    <tr
    //Paso la funcion al onclick
      onClick={SeleccionarCoin}
      style={{
        cursor: "pointer",
        backgroundColor:
          selectedCoin && selectedCoin.id === coin.id ? "#212529" : "",
      }}
    >

      <td className="text-muted">{index}</td>
      
      <td>
        <img
          src={coin.image}
          alt=""
          className="img-fluid me-4"
          style={{ width: "3%" }}
        />
        <span>{coin.name}</span>
        <span className="ms-3 text-muted">{coin.symbol}</span>
      </td>
      <td>${coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>${coin.total_volume.toLocaleString()}</td>
    </tr>
  );
};

export default CoinRow;