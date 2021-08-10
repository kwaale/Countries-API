import './CountryDetail.scss';

const CountryDetail = ({ country }) => {
    console.log(country)
    return (
        <div className="country">
            <h2>{country.name}</h2>
            <img className="flag" src={country.flag} alt={country.name} />
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Area: {country.area}</p>
            <p>Continent: {country.region}</p>
        </div>
    );
};
export default CountryDetail;