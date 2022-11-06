const {Country}=require('../db');
const fetch = require('cross-fetch');

const getCountriesApi= async(req,res)=>{
    try {
      const requestApi=  await fetch("https://restcountries.com/v3/all?limit=3")
        .then(response=>response.json())
        const countries = requestApi.map(c=>{
            return {
                id:c.cca3,
                name:c.name.common,
                flagImage:c.flags[0],
                continent:c.continents[0],
                capital : c.capital ? c.capital[0] : 'capital does not exist',
                subregion:c.subregion,
                area:c.area,
                population:c.population
            }
        })

        await Country.bulkCreate(countries).then(()=>console.log('Countries data have been saved'))
        const countriesDB= await Country.findAll()
        return res.json({quantity: countriesDB.length, countries:countriesDB})
        
    } catch (err) {
        return res.status(404).json({error :  err});
    }
}


module.exports={
    getCountriesApi,
};