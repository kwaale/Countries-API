const fetch = require('node-fetch');
const { Country } = require('../../db');
// BASE_URL + "/countries/add";
const addCountries = async (req, res, next) => {
    console.log('ruta addCountries');
    try {
        const response = await fetch(`https://restcountries.eu/rest/v2/all`);
        const data = await response.json();
        const countries = data.slice(0, 2).map(country => {
            console.log(country);
            Country.findOrCreate({
                where: {
                    id: country.alpha3Code
                }
            }
            );
        });
    
    res.json(countries)
    // res.send('countries')
        
    } catch (error) {
        console.error(error);
    }

    
}

module.exports = addCountries;