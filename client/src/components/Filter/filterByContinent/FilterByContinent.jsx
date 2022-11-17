import React ,{useEffect, useState}from "react";
import '../filterByContinent/filterByContinent.css';
import {useSelector,useDispatch} from 'react-redux';
import{filter} from '../../../redux/actions/countries'

const FilterByContinent = ()=>{

    const allCountries = useSelector((state)=> state.allCountries);

    const dispatch=useDispatch();

    let[filterByCountry, setFilterCountry] = useState({
        filterCountries:'',
    })

   
    useEffect(()=>{
        dispatch(filter(filterByCountry.filterCountries))
    },[dispatch,filterByCountry.filterCountries])

    const continents = Array.from(
        new Set(allCountries?.map((c) => c.continent))
        ).sort();

    const handleChange =(event)=>{
        setFilterCountry((state)=>{
            return{
                ...state,
                filterCountries:event.target.value
            }
        });
    }

    return(
        <>
            <label>Filter by continent</label>
            <select id="continent" onChange={(event)=> handleChange(event)} >
                <option value="ALL">All</option>
                {
                    continents.map((continent,i)=>{
                        return(
                            <option key={i} value={continent}>
                                {continent}
                            </option>
                        )
                    })
                }
            </select>
        </>
    );
}



export default FilterByContinent;