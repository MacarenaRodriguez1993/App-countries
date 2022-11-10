export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';

export const getAllCountries = ()=>{
    return function(dispatch){
        return fetch('http://localhost:3001/countries/')
            .then(resp => resp.json())
            .then(countries=>{
                dispatch({
                    type:GET_ALL_COUNTRIES,
                    payload:countries
                })
            })
    }
}