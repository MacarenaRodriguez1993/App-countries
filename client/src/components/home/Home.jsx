
import React from "react";
import { Link } from "react-router-dom";
import '../home/home.css'
import Country from '../../components/country/Country'
import Filtros from '../Filter/filterByName/filter'
import{useSelector, useDispatch} from 'react-redux';
import {getAllCountries} from '../../redux/actions/countries'
import {getActivities} from '../../redux/actions/activities'
import FilterByContinent from '../Filter/filterByContinent/FilterByContinent'
import FilterByActivity from "../Filter/filterByActivity/FilterByActivity";
import { useEffect } from "react";

const  Home =()=> {

    // componentDidMount() {
    //     this.props.getAllCountriesBy();
    //     this.props.getAllActivities();
    // }
    const allCountries = useSelector((state)=>state.countries)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries());
        dispatch(getActivities())
    },[dispatch])

        return( 
            <div className="home">
                <Link to='/'>
                    <button> Back</button>
                </Link>
                <Link to='/createActivity'>
                    <button> Create Activity</button>
                </Link>
                <div className="home_countries">
                    <div className="filter">
                        <Filtros/>
                        <FilterByContinent/>
                        <FilterByActivity/>
                    </div>
                    <div className="countryCard">
                        {
                            allCountries?.map((country)=> {
                                return(
                                    
                                    <Country
                                        key={country.id}
                                        id={country.id}
                                        name={country.name}
                                        image={country.flagImage}
                                        continent={country.continent}
                                    />
                                )                
                            })
                        }
                    </div>
                </div>
            </div>
        );
    
// }
// export const mapStateToProps = (state) =>{
//     return{
//         allCountries: state.countries,
//     }
//   }
  
//   export const mapDispatchToProps = (dispatch)=>{
//     return{
//       getAllCountriesBy : ()=> dispatch(getAllCountries()),
//       getAllActivities : ()=> dispatch(getActivities())
//     }
    
  };
  
  export default Home;
