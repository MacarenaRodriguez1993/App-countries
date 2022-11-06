const Router=require('express');
const router =Router();
const {getCountriesApi}=require('../../controllers/countries-controller')

router.get('/',getCountriesApi)

module.exports = router;