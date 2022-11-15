const Router=require('express');
const router =Router();
const {getCountriesApi ,findCountries, getCountryById} =require('../controllers/countries-controller')
const {Country}=require('../db');
//ROUTER GET COUNTRIES AND COUNTRIES?NAME='....'
router.get('/',async(req,res)=>{
    try {
        let {name} =req.query;

        let countriesDB = await Country.count();

        if(countriesDB===0) await getCountriesApi();

        const find = await findCountries(name);
    
        return res.status(200).json(find)

    } catch (err) {
        return res.status(400).send('erroraqui');
    }
})


router.get('/:id',async(req,res)=>{
    try {
        const {id}= req.params;
        const countryById = await getCountryById(id.toUpperCase())
        res.status(200).json(countryById)
    } catch (err) {
        res.status(404).json({error:err})
    }
})


module.exports = router;