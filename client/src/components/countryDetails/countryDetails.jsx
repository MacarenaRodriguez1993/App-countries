import React, { useEffect } from "react";
import{useDispatch, useSelector} from 'react-redux';
import '../countryDetails/countryDetails.css';
import { getCountryDetails} from '../../redux/actions/countries';
import { Link } from "react-router-dom";

const CountryDetails = (props)=>{

    const dispatch = useDispatch();
    const countryDetails = useSelector(state=>state.countryDetails);
    const countryId=props.match.params.id;

    useEffect(()=>{
        dispatch(getCountryDetails(countryId))
    },[dispatch,countryId]);

    return (
        <>
        <Link to='/home'>
            <button>Back</button>
        </Link>
      
        <div className="countryDetails">
            <h4>{countryDetails.id}</h4>
            <h4>{countryDetails.name}</h4>
            <img src={countryDetails.flagImage} alt={countryDetails.name} />
            <h5>{countryDetails.capital}</h5>
            <h5>{countryDetails.subregion}</h5>
            <h5>{countryDetails.area}</h5>
            <h5>{countryDetails.population}</h5>
            <h2>Activities:</h2>
            {
                countryDetails.activities?.map(
                    (activi)=>{
                        return (
                            <div>
                                <h2>Name: {activi.name}</h2>
                                <h4>Difficult: {activi.difficult}</h4>
                                <h4>Duration: {activi.duration}</h4>
                                <h4>Season: {activi.season}</h4>
                            </div>
                        )
                    }
                )
            }
        </div>
        </>
    );
}


export default CountryDetails;