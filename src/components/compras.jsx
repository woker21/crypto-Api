import { useState, useEffect } from "react";






const ComprarCoin = () => {
  
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(null);


  useEffect(() => {
    const OBtenerCoin = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
        );
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error(error);
      }
    };
    OBtenerCoin();
  }, []);

  const seleccionarCoin = (coin) => {
    setSelectedCoin(coin);
  };

  const handleBuyCoin = () => {
    if (selectedCoin) {
      window.open(
        `https://www.binance.com/es/buy-sell-crypto?channel=card&fiat=EUR&crypto=${selectedCoin.id}`,
        "_blank"
      );
    }
  };

  return (
    <div className="container mt-5">
      <h2>Comprar Coins</h2>
      <hr />
      <div className="row">

        {/*columna de resumen de las coins */}
        <div className="col-md-4 mb-4">
          <h4>Elige una Coin</h4>
          <div className="list-group">
            {coins.map((coin) => (
              <button
                key={coin.id}
                id="grupoLista"
                className={`list-group-item list-group-item-action ${
                  selectedCoin?.id === coin.id ? "active" : ""
                }`}
                onClick={() => seleccionarCoin(coin)}
              >
                <img
                  src={coin.image}
                  alt=""
                  className="img-fluid me-4"
                  style={{ width: "6%" }}
                />
                <span>{coin.name}</span>
                <span className="ms-3 text-muted">{coin.symbol.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>



        {/*columna de resumen de compras */}
        <div className="col-md-8">
          <h4>Resumen de la compra</h4>
          <hr />
          {selectedCoin ? (
            <div className="row" id="resumenCoin">
              <div className="col-md-4">
                <img
                  src={selectedCoin.image}
                  alt=""
                  className="img-fluid mb-4"
                  style={{ width: "40%" }}
                />
              </div>
              <div className="col-md-8">
                <h5>{selectedCoin.name}</h5>
                <p className="text-muted">{selectedCoin.symbol.toUpperCase()}</p>
                <p>Precio: €{selectedCoin.current_price.toLocaleString()}</p>
                <p>Capitalización de mercado: €{selectedCoin.market_cap.toLocaleString()}</p>
                <button className="btn btn-primary" onClick={handleBuyCoin}>
                  Comprar ahora
                </button>
              </div>
            </div>
          ) : (
            <p>Seleccione una Coin para ver el resumen de la compra.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComprarCoin;
