
const getCoinstList =async () =>{    
    const result = await fetch('https://api.coingecko.com/api/v3/coins/list');    
    const data = await result.json()    
    return data
}
const getCoin = async(id) => {
    const url = 'https://api.coingecko.com/api/v3'
    const result = await fetch(`${url}/coins/${id}`);
    const {data} = await result.json();
    return data;
}
const getTrendings = async () =>{
    const url = 'https://api.coingecko.com/api/v3'
    const result = await fetch(`${url}/search/trending`);
    const data = await result.json();
    return data;
}
const getPrices  =async () =>{
    const url = 'https://api.coingecko.com/api/v3'
    const result = await fetch(`${url}/simple/price`);
    const data = await result.json();
    return data;

}
export {
    getCoinstList,
    getCoin,
    getTrendings,
    getPrices
}