const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoute=require('./countryRoutes')
const activityRoute=require('./activityRoutes')


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries',countryRoute);
router.use('/activities',activityRoute);

router.get('/',(req,res)=>{
    res.send('Henry countries Pruebas')
})



module.exports = router;
