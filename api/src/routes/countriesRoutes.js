const { Router } = require('express');
const getAllCountries = require('../controllers/countriesControllers/getAllCountries');
const addCountries  = require('../controllers/countriesControllers/addCountries');


const router = Router();

// Configurar los routers
router.get('/', getAllCountries);
router.post('/add', addCountries);
// router.get('/', authRouter);
// router.get('/', authRouter);

module.exports = router;
