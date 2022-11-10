const Router=require('express');
const router =Router();
const {getCountriesApi, getCountryById,getCountriesByName}=require('../../controllers/countries-controller')


router.get('/',getCountriesApi)
router.get('/',getCountriesByName)
router.get('/:id',getCountryById)


module.exports = router;