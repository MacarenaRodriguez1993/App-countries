import React from "react";
import { useDispatch } from "react-redux";
import {alphabeticalOrder} from '../../../redux/actions/countries'



const OrderAlphabetical = () =>{

    const dispatch = useDispatch();
    const handleOrder = (event)=>{
        dispatch(alphabeticalOrder(event.target.value))
    }

    return(
        <>
            <label>Order Alphabetical</label>
            <select id='orderAlphabetical' onChange={e=>handleOrder(e)}>
                <option value='ALL'>None</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
        </>
    )
}

export default OrderAlphabetical;