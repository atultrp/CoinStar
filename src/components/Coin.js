import React from 'react'

const Coin = (props) => {
    const { coin } = props;
    return (
        <>
            <div className="cryptoCoin">
                <img src={coin.image} alt={coin.name} className='coinLogo mt-2 my-1' />
                <div className="coinNameWrap">
                    <h1 className="coinName">{coin.name}</h1>
                    <p className="coinSymbol mx-2">{coin.symbol}</p>
                </div>
                <p className="coinPrice lead">${coin.current_price.toLocaleString()}</p>
                <p className="coinMarketCap lead">
                    Market Cap : ${coin.market_cap.toLocaleString()}
                </p>
                <p className="coinVolume lead">
                    Total Volume : ${coin.total_volume.toLocaleString()}
                </p>
                {coin.price_change_percentage_24h < 0 ? (
                    <div className="priceContainerDOWN lead">
                        <i className="fas fa-angle-down fa-2x angle"></i>
                        <p className="priceChange">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                ) : (
                    <div className="priceContainerUP lead">
                        <i className="fas fa-angle-up fa-2x angle"></i>
                        <p className="priceChange">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Coin