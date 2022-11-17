import React from "react";
import '../Pagination/pagination.css'
import { useSelector,useDispatch } from "react-redux";
import{pageNext,pageBack} from '../../redux/actions/countries';


const Pagination = ({allCountries}) =>{
    const dispatch =useDispatch();
    const page=useSelector((state)=> state.page)
    const numberPage=(allCountries/10)

    const handleNext =()=>{
        dispatch(pageNext())
    }
    const handleBack = () =>{
        dispatch(pageBack())
    }
    return(
        <div className="paginator">
            <button onClick={handleBack}>←back</button>
                {
                    `Page ${page+1} by ${numberPage}`
                }
            <button onClick={handleNext}>next→</button>
        </div>
    )
}

export default Pagination;