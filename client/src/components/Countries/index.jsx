import Country from "./Country";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../store/actions"

const Countries = (props) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.countriesState);
    console.log("Countries", state);
    useEffect(() => {
        dispatch(getAllCountries());
    }, [])
    return (
        <div className="Countries">
            {state.countries.map(country => <Country key={country.id} country={country}/>)}
        </div>
    )
}
export default Countries;