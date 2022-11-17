import React from "react";
import { useDispatch } from "react-redux";
import {populationOrder} from '../../../redux/actions/countries'

const OrderPopulation = ()=>{

    const dispatch = useDispatch();
    const handleOrder = (event)=>{
        dispatch(populationOrder(event.target.value))
    }
    return(
        <>
            <label> Order Population </label>
            <select id='orderPopulation' onChange={e=>handleOrder(e)}>
                <option value="ALL">None</option>
                <option value="HIGH - LOW">High - Low</option>
                <option value="LOW - HIGH">Low - High</option>
            </select>
        </>
    )
}

export default OrderPopulation;