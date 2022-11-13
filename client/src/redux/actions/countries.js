export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';

export const getAllCountries = ()=>{
    return function(dispatch){
        fetch('http://localhost:3001/countries/')
            .then(resp => resp.json())
            .then(countries=>{
                dispatch({
                    type:GET_ALL_COUNTRIES,
                    payload:countries
                })
            })
    }
}

export const getCountryDetails= (id) =>{
    return function(dispatch){
        fetch(`http://localhost:3001/countries/${id}`)
            .then(resp => resp.json())
            .then(countryDetails=>{
                dispatch({
                    type: GET_COUNTRY_DETAILS,
                    payload:countryDetails
                })
            })
    }
}