import React, { useState, useEffect } from "react";


const Convertidor = () => {
  const [monedas, setMonedas] = useState([]);
  const [monedaSeleccionada, setMonedaSeleccionada] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [resultado, setResultado] = useState(0);

//obtenemos los datos de la api y los efectos
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


//guardamos el valor de la moneda seleccionada
  const MonedaSeleccionada = (e) => {
    setMonedaSeleccionada(e.target.value);
  };


//guardamos el valor de la cantidad a convertir
  const Cantidad = (e) => {
    setCantidad(e.target.value);
  };


//calculamos y convertimos las monedas
  const Convertir = () => {
    const moneda = monedas.find((m) => m.id === monedaSeleccionada);
    const valorEnUSD = cantidad / moneda.current_price;
    setResultado(valorEnUSD);
  };



  return (
    <div className="container mt-4">
      <h1>Convertidor de moneda</h1>

      {/*Seleccionamos la moneda a convertir y los estilos son con boostrap */}
      <div className="row mt-4">
        <div className="col-md-4">
          <label htmlFor="moneda">Seleccione una moneda:</label>
          <select
            id="moneda"
            className="form-control"
            value={monedaSeleccionada}
            onChange={MonedaSeleccionada}
          >
            {/*hacemos map para seleccionar cada coin a convertir */}
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
            onChange={Cantidad}
          />

        </div>
        <div className="col-md-4">
          {/*Boton Convertir */}
          <button className="btn btn-primary mt-4" onClick={Convertir}>
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