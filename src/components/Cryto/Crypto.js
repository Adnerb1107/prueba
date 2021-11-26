import React, { useState, useEffect } from 'react'
import {
    getCoinstList,
    getCoin,
    getTrendings,
    getPrices
} from "../../services/getData"

export const Crypto = () => {
    const [coin, setcoin] = useState([])
    const data =async () =>{
        const valores=  await getCoinstList()
        console.log(valores)
        setcoin(valores)
        return valores;
    }
    useEffect(() => {        
        data();        
    }, [])
    return (
        <div>
            {coin.map(coin=> <p>{coin.name}</p>)}            
        </div>
    )
}
