import { CREATE_ACTIVITY } from "../actions/activities";
import { GET_ALL_COUNTRIES,GET_COUNTRY_DETAILS,GET_COUNTRY_BY_NAME ,FILTER} from "../actions/countries";
import {GET_ACTIVITIES,FILTER_ACTIVITY} from '../actions/activities'

const initialState ={
    allCountries: [],
    countryDetails:{},
    activities:[],
    countries:[],
    filterByCountry:'ALL',
    filterByActivity:'ALL'

};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload,
                countries:action.payload
            };

        case GET_COUNTRY_DETAILS:
            return{
                ...state,
                countryDetails:action.payload
            }

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries:action.payload
            }

        case CREATE_ACTIVITY:
            return{
                ...state,
                activities:[...state.activities,action.payload]
            }
       
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        case FILTER:
            let filterByCountry=action.payload;
            let allCountries = [...state.allCountries]

            if(filterByCountry !== 'ALL'){
                allCountries = allCountries.filter((c)=> c.continent === filterByCountry)
            }

            return{
                ...state,
                countries:allCountries,
            }
        case FILTER_ACTIVITY:
            let filterByActivity=action.payload;
            let allCountriesByActivity =[...state.allCountries]
                if(filterByActivity && filterByActivity!=='ALL'){
                     allCountriesByActivity=allCountriesByActivity.filter(c=> {
                     const activiti = c.activities.filter(a=>{
                     return a.name===filterByActivity; 
                     });
                     return activiti.length && activiti
                })
                
            }
            return{
                ...state,
                countries:allCountriesByActivity
            }
        default:
            return {...state}
    }
}

export default rootReducer;