const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    callingCodes: {
      type: DataTypes.STRING
    },
    capital: {
      type: DataTypes.STRING
    },
    region: {
      type: DataTypes.STRING
    },
    subregion: {
      type: DataTypes.STRING
    },
    population: {
      type: DataTypes.INTEGER
    },
    area: {
      type: DataTypes.INTEGER
    },
    timezones: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    borders: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    nativeName: {
      type: DataTypes.STRING
    },
    languages: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
    flag: {
      type: DataTypes.STRING
    },
  });
};

/*
{
    "name": "Afghanistan",
    "topLevelDomain": [
      ".af"
    ],
    "alpha2Code": "AF",
    "alpha3Code": "AFG",
    "callingCodes": [
      "93"
    ],
    "capital": "Kabul",
    "altSpellings": [
      "AF",
      "Afġānistān"
    ],
    "region": "Asia",
    "subregion": "Southern Asia",
    "population": 27657145,
    "latlng": [
      33.0,
      65.0
    ],
    "demonym": "Afghan",
    "area": 652230.0,
    "gini": 27.8,
    "timezones": [
      "UTC+04:30"
    ],
    "borders": [
      "IRN",
      "PAK",
      "TKM",
      "UZB",
      "TJK",
      "CHN"
    ],
    "nativeName": "افغانستان",
    "numericCode": "004",
    "currencies": [
      {
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }
    ],
    "languages": [
      {
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "پښتو"
      },
      {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      },
      {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }
    ],
    "translations": {
      "de": "Afghanistan",
      "es": "Afganistán",
      "fr": "Afghanistan",
      "ja": "アフガニスタン",
      "it": "Afghanistan",
      "br": "Afeganistão",
      "pt": "Afeganistão",
      "nl": "Afghanistan",
      "hr": "Afganistan",
      "fa": "افغانستان"
    },
    "flag": "https://restcountries.eu/data/afg.svg",
    "regionalBlocs": [
      {
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }
    ],
    "cioc": "AFG"
  },

*/