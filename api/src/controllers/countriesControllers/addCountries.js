
// BASE_URL + "/countries/add";
const addCountries = async (req, res, next) => {
    console.log('ruta addCountries');
    res.json({ message: 'Obteniendo todos los países' });
}

module.exports = addCountries;