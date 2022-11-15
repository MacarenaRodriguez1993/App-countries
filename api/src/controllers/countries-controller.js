const {Country,Activity}=require('../db');
const fetch = require('cross-fetch');
const { Op } = require("sequelize");
//const axios =require('axios')

const getCountriesApi= async()=>{
    try {
        // if(req.query.name) return next();
        // let countriesDB = await Country.findAll();
        // if(!countriesDB.length){
        //     const requestApi =  await fetch("https://restcountries.com/v3/all")
        //     .then(response=>response.json())
        //     const countries = requestApi.map(c=>{
        //         return {
        //             id:c.cca3,
        //             name:c.name.common.toLowerCase(),
        //             flagImage:c.flags[0],
        //             continent:c.continents[0],
        //             capital : c.capital ? c.capital[0] : 'capital does not exist',
        //             subregion:c.subregion,
        //             area:c.area,
        //             population:c.population
        //         }
        //     })
        //     await Country.bulkCreate(countries).then(()=>console.log('Countries data have been saved'))
        //     countriesDB = await Country.findAll()
        // }
        // return res.status(200).send(countriesDB)
        // let requestApi =  await fetch("https://restcountries.com/v3/all")
        //     .then(response=>response.json())
        //     const countries = requestApi.map(c=>{
        //         return {
        //             id:c.cca3,
        //             name:c.name.common.toLowerCase(),
        //             flagImage:c.flags[0],
        //             continent:c.continents[0],
        //             capital : c.capital ? c.capital[0] : 'capital does not exist',
        //             subregion:c.subregion,
        //             area:c.area,
        //             population:c.population
        //         }
        //     })
        //     await Country.bulkCreate(countries).then(()=>console.log('Countries data have been saved'))

        // return res.status(200).send('success')

        let requestApi = (await axios.get('https://restcountries.com/v3/all')).data
        requestApi = await requestApi?.map(c=> Country.findOrCreate({
            where:{
                id:c.cca3,
                name:c.name.common.toLowerCase(),
                flagImage:c.flags[0],
                continent:c.continents[0],
                capital : c.capital ? c.capital[0] : 'capital does not exist',
                subregion: c.subregion ? c.subregion : c.region,
                area:c.area,
                population:c.population
            }
        }));

    } catch (err) {
        return res.status(400).send('error');
    }
}


const findCountries = async(name)=>{
    try {
        // const{name}=req.query
        // let countriesMatch;

        // if(name){
        //     countriesMatch = await Country.findAll({
        //         where: {
        //             name:{
        //             [Op.substring]: `%${name}%`
        //             }
        //         }  
        //     })
        // }else{
        //     countriesMatch = await Country.findAll()
        // }

        // return res.status(200).send(countriesMatch)
        
    
        let country;

        if(name){
            country = await Country.findAll({ 
                where: {
                    name:{
                        [Op.substring]: `%${name}%`
                    }
                }
            }, {include:[Activity]})
        }else{
            country = await Country.findAll({
                include:[Activity]
                //{
                    //model:Activity,
                    // attributes:['name'],
                    // through: {
                    //     attributes: [],
                    // },
                //}
            })
        }
        return country
    } catch (err) {
        return res.status(404).json({error:err.message})
    }
}

const getCountryById = async(id)=>{
    try {
        const country = await  Country.findByPk(id,{
            include:[Activity]
        });
        return country;
    } catch (err) {
        return res.status(400).json({error:err.message})
    }
}

module.exports={
    getCountriesApi,
    getCountryById,
    findCountries
};