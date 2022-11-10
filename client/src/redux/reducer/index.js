import { GET_ALL_COUNTRIES } from "../actions/countries";

const initialState ={
    allCountries: [],
    country:{}
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload,
            };
        default:
            return {...state}
    }
}

export default rootReducer;