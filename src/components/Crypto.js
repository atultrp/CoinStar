import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Coin from './Coin';

const Crypto = () => {

    // API : https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            })
    }, []);


    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
    console.log(filteredCoins)

    return (
        <>
            <nav className="header sticky-top">
                <h1 className="navbar-brand my-2"><i className="fas fa-coins"></i> CoinStar</h1>
                <form>
                    <input type="text" className="inputField my-2" placeholder="Search a coin" onChange={handleChange}/>
                </form>
            </nav>

            <div className='container'>
                <h2 className='text-center my-4'>Cryptocurrency Price <i class="fas fa-dollar-sign"></i></h2>
                <div className="row">
                    {filteredCoins.map((element) => {
                        console.log(element);
                        return (
                            <div className="col-md-4 my-3">
                                <Coin key={element.id} coin={element} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Crypto
