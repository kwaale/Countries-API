const { Country } = require('../../db');

/*
Ruta GET BASE_URL + "/countries";
Envia todos los paises de la DB
*/
const getAllCountries = async (req, res, next) => {
    try {
        return res.json(await Country.findAll());
    } catch (error) {
        console.log(error);
    }
};

module.exports = getAllCountries;