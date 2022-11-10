import React from "react";
import '../../components/country/country.css'


const  Country= ({name,image,continent})=>{

    return(
        <div className="card">
            <h3>{name}</h3>
            <img className="flag" src={image} alt={name} />
            <p>{continent}</p>
        </div>
    );
}
export default Country;