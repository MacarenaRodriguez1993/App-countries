import React from 'react';
import '../FormCardCountry/formCardCountry.css'

const FormCardCountry = ({id,name,image , state, setState})=>{

    const handleClose = ()=>{
        setState({
            ...state,
            countries:state.countries.filter(c=> c!==id)
        })
    }

    return(
        <div className='formCardCountry'>
            <div >
                <button onClick={handleClose}>x</button>
            </div>
            <div className='content'>
                <img className='imgFlag' src={image} alt="" />
                <h3>{name}</h3>
            </div>
          
        </div>
    )
}

export default FormCardCountry;