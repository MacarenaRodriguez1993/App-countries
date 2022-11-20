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
        <div className="home">
            <h3 className="titleActivities">Details {countryDetails.name}</h3>
            <Link to='/home'>
                <button className="buttonBack">Back</button>
            </Link>
            <div className="page">
                <div className="countryDetails">
                    <div className="headerDetails">
                        <h4 id='code'>{countryDetails.id}</h4>
                        <h4>Country Name: {countryDetails.name}</h4>
                    </div>
                    <div className="contentDetails">
                        <img className="flagDetails" src={countryDetails.flagImage} alt={countryDetails.name} />
                        <div id='content'>
                            <h5>Capital : {countryDetails.capital}</h5>
                            <h5>Region: {countryDetails.subregion}</h5>
                            <h5>Area: {countryDetails.area} km2</h5>
                            <h5>Population: {countryDetails.population}</h5>
                            <button>Activities</button>
                        </div>
                    </div>
                    
                </div>
                <div className="activities">
                    <h3>Activities:</h3>
                    
                    {
                        countryDetails.activities?.map(
                            (activi)=>{
                                return (
                                    <div className="cardActivities">
                                        <div className="header">
                                            <h3>Name: {activi.name}</h3>
                                            <button className="closed">x</button>
                                        </div>
                                        
                                        <h4>Difficult: {activi.difficult}</h4>
                                        <h4>Duration: {activi.duration}</h4>
                                        <h4>Season: {activi.season}</h4>
                                    </div>
                                )
                            }
                        )
                    }
                    
                </div>
            </div>
            
        </div>
    );
}


export default CountryDetails;