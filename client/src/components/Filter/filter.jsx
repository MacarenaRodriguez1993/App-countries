import React, { useState } from "react";
import '../Filter/filter.css';
import {useDispatch} from 'react-redux';
import {getCountryByName,getAllCountries} from '../../redux/actions/countries'



const Filtros = ()=>{

    const dispatch=useDispatch();

    let [state,setState] = useState({
        search:'',
    })

    const handleChange =(event)=>{
        if(event.target.value===''){
            dispatch(getAllCountries())
        }
        setState({
            search:event.target.value
        });
        dispatch(getCountryByName(event.target.value));
    }
    
    return(
        <>
            <form className="formSearch" onSubmit={(e)=>e.preventDefault()}>
                <label>Search country by name</label>
                <input 
                    type="search"
                    name='country'
                    placeholder="ex.argentina"  
                    value={state.search}
                    onChange={(event)=>handleChange(event)}
                />
                <button type="submit">search</button>
            </form>
        </>
    );
}

export default Filtros;