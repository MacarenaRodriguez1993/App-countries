import { CREATE_ACTIVITY } from "../actions/activities";
import { GET_ALL_COUNTRIES, GET_COUNTRY_DETAILS } from "../actions/countries";

const initialState ={
    allCountries: [],
    countryDetails:{},
    activities:[],

};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload,
            };

        case GET_COUNTRY_DETAILS:
            return{
                ...state,
                countryDetails:action.payload
            }

        case CREATE_ACTIVITY:
            return{
                ...state,
                activities:[...state.activities,action.payload]
            }
        default:
            return {...state}
    }
}

export default rootReducer;