const {Country,Activity}=require('../db');
const fetch = require('cross-fetch');
const { Op } = require("sequelize");
const getCountriesApi= async(req,res,next)=>{
    try {
        if(req.query.name) return next();
        let countriesDB = await Country.findAll();
        if(!countriesDB.length){
            const requestApi =  await fetch("https://restcountries.com/v3/all")
            .then(response=>response.json())
            const countries = requestApi.map(c=>{
                return {
                    id:c.cca3,
                    name:c.name.common.toLowerCase(),
                    flagImage:c.flags[0],
                    continent:c.continents[0],
                    capital : c.capital ? c.capital[0] : 'capital does not exist',
                    subregion:c.subregion,
                    area:c.area,
                    population:c.population
                }
            })
            await Country.bulkCreate(countries).then(()=>console.log('Countries data have been saved'))
            countriesDB = await Country.findAll()
        }
        return res.status(200).send(countriesDB)
       // return res.status(200).json({quantity: countriesDB.length, countries:countriesDB})

    } catch (err) {
        return res.status(400).json({error :  err});
    }
}

// GET /countries?name="...":
// Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// Si no existe ningún país mostrar un mensaje adecuado

const getCountriesByName = async(req,res)=>{

    try {
        const{name}=req.query
        console.log('estoty en by name')
        let countriesMatch = await Country.findAll({
            where: {
                name:{
                    [Op.substring]: `%${name}%`
                }
            }  
        })
        
        if(countriesMatch.length!==0){
            return res.status(200).json({countriesMatch})
        }else{
            throw new Error(`Not exist Country with contains this name ${name}`)
        }
        
    } catch (err) {
        return res.status(404).json({error:err.message})
    }
}

const getCountryById = async(req,res)=>{
    const {id}= req.params;
    try {
        const country =await  Country.findByPk(id.toUpperCase(),{
            include:[{
                model:Activity
            }]
        });
        if(country){
            return res.status(200).json(country)
        }else{
            throw new Error(`The ID = ${id} does not correspond to a country in the database`)
        }
    } catch (err) {
        return res.status(400).json({error:err.message})
    }
}

module.exports={
    getCountriesApi,
    getCountryById,
    getCountriesByName
};