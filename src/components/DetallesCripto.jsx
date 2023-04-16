import React from "react";

const CoinDetails = ({ coin }) => {
    if (!coin) return null;

    return (
        <div className="col-md-4 w-30">
            <div id="card-principal" className="mt-4">

                <div id="card" className="card-body">
                    <img
                        src={coin.image}
                        alt=""
                        className="img-fluid mb-4"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/150";
                        }}
                    />
                    <h4 className="card-title">
                        {coin.name} ({coin.symbol.toUpperCase()})
                    </h4>
                    <p className="card-text">{coin.description?.en}</p>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className="text-muted">Precio Actual:</span>
                        <span className="">{coin.current_price}</span>
                    </div>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className="text-muted">Cambio de Precio (24h):</span>
                        <span
                            className={
                                coin.price_change_percentage_24h > 0
                                    ? "text-success"
                                    : "text-danger"
                            }
                        >
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </span>
                    </div>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className="text-muted">Mercado:</span>
                        <span className="">{coin.market_cap}</span>
                    </div>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className="text-muted">Volumen Total:</span>
                        <span className="">{coin.total_volume}</span>
                    </div>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className="text-muted">Circulacion:</span>
                        <span className="">{coin.circulating_supply}</span>
                    </div>
                    <div className="card-text d-flex justify-content-between align-items-center">
                        <span className="text-muted">Suministro Total:</span>
                        <span className="">{coin.total_supply}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinDetails;
