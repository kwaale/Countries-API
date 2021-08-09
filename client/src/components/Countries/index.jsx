import Country from "./Country";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCountries } from "../../store/actions"

const Countries = (props) => {
    const dispatch = useDispatch();
    const {countries} = useSelector(state => state.countries);

    useEffect(() => {
        dispatch(getAllCountries());
        console.log('countries', countries);
    },[])

return(
    <div className="Countries">
        <h1>Countries</h1>
        <Country/>
    </div>
)
    }
export default Countries;