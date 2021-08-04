const fetch = require('node-fetch');
const { Country } = require('../../db');
/*
Ruta Post BASE_URL + "/countries/add";
Recibe por body un arra de paises, en su defecto los busca en la api: https://restcountries.eu/rest/v2/all
Los carga a la DB
body = [{
    id,             //Obligatorio
    name,           //Obligatorio
    callingCodes,
    capital,
    region,
    subregion,
    population,
    area,
    timezones,
    borders,
    nativeName,
    languages,
    flag,
}]

*/
const addCountries = async (req, res, next) => {
    console.log('ruta addCountries');
    try {
        if(req.body.length > 0){
            const countries = req.body;
            await cargaArrayDB(countries);
            res.json({status: 'ok'});
        }else{
            const response = await fetch(`https://restcountries.eu/rest/v2/all`);
            const countries = await response.json();
            await cargaArrayDB(countries);
            res.json({status: 'ok'});
        }
    } catch (error) {
        console.error(error);
    }
};
//Recibe un array de paises y carga la DB
const cargaArrayDB = async (arr)=>{
    arr.forEach(async country => {
        await Country.findOrCreate({
            where: {
                id: country.alpha3Code
            },
            defaults: {
                name: country.name,
                callingCodes: country.callingCodes,
                capital: country.capital,
                region: country.region,
                subregion: country.subregion,
                population: country.population,
                area: country.area,
                timezones: country.timezones,
                borders: country.borders,
                nativeName: country.nativeName,
                languages: country.languages.map(language => language.name),
                flag: country.flag,
            }
        });
    });
}
module.exports = addCountries;