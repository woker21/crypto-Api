import React, { useState, useEffect } from "react";

const Convertidor = () => {
  const [monedas, setMonedas] = useState([]);
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    const obtenerMonedas = async () => {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setMonedas(data);
      setMonedaSeleccionada(data[0].id);
    };
    obtenerMonedas();
  }, []);

  const handleMonedaSeleccionada = (e) => {
    setMonedaSeleccionada(e.target.value);
  };

  const handleCantidad = (e) => {
    setCantidad(e.target.value);
  };

  const handleConvertir = () => {
    const moneda = monedas.find((m) => m.id === monedaSeleccionada);
    const valorEnUSD = cantidad / moneda.current_price;
    setResultado(valorEnUSD);
  };

  return (
    <div className="container mt-4">
      <h1>Convertidor de moneda</h1>
      <div className="row mt-4">
        <div className="col-md-4">
          <label htmlFor="moneda">Seleccione una moneda:</label>
          <select
            id="moneda"
            className="form-control"
            value={monedaSeleccionada}
            onChange={handleMonedaSeleccionada}
          >
            {monedas.map((moneda) => (
              <option key={moneda.id} value={moneda.id}>
                {moneda.name} ({moneda.symbol.toUpperCase()})
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="cantidad">Ingrese la cantidad:</label>
          <input
            id="cantidad"
            type="number"
            className="form-control"
            value={cantidad}
            onChange={handleCantidad}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary mt-4" onClick={handleConvertir}>
            Convertir
          </button>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <h4>Precio actual de {monedaSeleccionada}:</h4>
          <p>{monedas.find((m) => m.id === monedaSeleccionada)?.current_price}</p>
        </div>
        <div className="col-md-4">
          <h4>Valor en USD:</h4>
          <p>{cantidad}</p>
        </div>
        <div className="col-md-4">
          <h4>Valor en {monedaSeleccionada}:</h4>
          <p>{resultado.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Convertidor;
